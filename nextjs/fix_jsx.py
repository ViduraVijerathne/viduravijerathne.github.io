import re

with open('src/app/page.tsx', 'r') as f:
    jsx = f.read()

# Fix unescaped < and > and { and } inside text, but this is risky with regex on the whole file.
# The error was: Error: Expected '</', got 'ident'
# 690 | <span className="code-keyword">void</span> <span className="code-fn">vMotorControlTask</s...
# 691 |     PIDController leftMotorPID(<span className="code-num">2.4f</span>, <span className="c...
# It's because the C++ code has:
# void vMotorControlTask(void* pvParameters) {
# PIDController ...
# It interprets the { as a JS expression block, and then it finds PIDController inside it, which is invalid JS!
# In JSX, raw `{` and `}` MUST be escaped as `{"{"}` and `{"}"}` if they are text content.
# Let's fix this specifically for the C++ code block.

# Find the block:
# void vMotorControlTask(void* pvParameters) {
jsx = jsx.replace('void* pvParameters) {', 'void* pvParameters) {"{"}')
jsx = jsx.replace('while (true) {', 'while (true) {"{"}')
jsx = jsx.replace('100Hz Control Loop\n    }\n}', '100Hz Control Loop\n    {"}"}\n{"}"}')

# Wait, there might be other `{` or `}` ?
# Let's check for any stray `{` in the file that isn't JSX.
# It's safer to just re-read the index.html and do a more robust string replacement for the specific text node.

with open('src/app/page.tsx', 'w') as f:
    f.write(jsx)

