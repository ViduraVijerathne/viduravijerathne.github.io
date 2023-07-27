'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "58cde7bfb268eb56939a6721635d6d8b",
"assets/AssetManifest.smcbin": "fde2ac5472a01182666b536e7b1653ff",
"assets/assets/metrix.json": "362f4cb1fdd7c9a5c889d3a08d09bb55",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f127bdda1d5e61e28f3c48560236b75d",
"assets/NOTICES": "d13b793ec6f0c437fd51b232d68d464a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "fee5d0e7df32ece1e06b4a9be78f90f3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "504b28ba4fdf239c3a6d1d6ab8252e53",
"/": "9dd383a85b2fd39953a66836b5a33b37",
"main.dart.js": "336e2aed49cb71dd6a6e146b77551ae4",
"manifest.json": "b287b9bc704d0cf846c100200f1f521e",
"version.json": "af9d9a84f7fd9928f92336916e49b4a0",
"viduravijerathne.github.io/.git/COMMIT_EDITMSG": "257783def22a9b5343075a39097ec900",
"viduravijerathne.github.io/.git/config": "4e5c7aa3ac6cb09d0b4486e4920cc41b",
"viduravijerathne.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"viduravijerathne.github.io/.git/FETCH_HEAD": "ad857656499904ec9a5f334681cc33ea",
"viduravijerathne.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"viduravijerathne.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"viduravijerathne.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"viduravijerathne.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"viduravijerathne.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"viduravijerathne.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"viduravijerathne.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"viduravijerathne.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"viduravijerathne.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"viduravijerathne.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"viduravijerathne.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"viduravijerathne.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"viduravijerathne.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"viduravijerathne.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"viduravijerathne.github.io/.git/index": "3ab5401139320e49304bbe3e056603cf",
"viduravijerathne.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"viduravijerathne.github.io/.git/logs/HEAD": "c8488546bb592207a3ba161b7e3cd57f",
"viduravijerathne.github.io/.git/logs/refs/heads/main": "c8488546bb592207a3ba161b7e3cd57f",
"viduravijerathne.github.io/.git/logs/refs/remotes/origin/HEAD": "919fbcef0c56f36983024e329caf5def",
"viduravijerathne.github.io/.git/logs/refs/remotes/origin/main": "316205aa2f9a4a23279a4cc68d0e2124",
"viduravijerathne.github.io/.git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
"viduravijerathne.github.io/.git/objects/05/b7234f0a10b35f6219a32e63c0dfbe1a09c434": "98941ff3bf6ba4621a51b4f9399dfa98",
"viduravijerathne.github.io/.git/objects/09/abd8d1e4ac19bbc8ec14073afa0cb43d174e1b": "6da92dc1419e9b4171ddbfa92e04f260",
"viduravijerathne.github.io/.git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
"viduravijerathne.github.io/.git/objects/11/accc40c8922ca355b8ef1df598a28ddd6e4d66": "b10acac9f701a3b495bb790a4a0ecc98",
"viduravijerathne.github.io/.git/objects/15/40b0bbea25541547157a236debd0ee387840e4": "f9dc0afb95bb38e563604ce0bfe5f2e1",
"viduravijerathne.github.io/.git/objects/15/88743ff20c819363784c901efcf93ed0bffb04": "a181b4aeed8cf37f5bd0d972a90f9b26",
"viduravijerathne.github.io/.git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
"viduravijerathne.github.io/.git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
"viduravijerathne.github.io/.git/objects/2b/d1442ff81e4d2d9e4c4e78856444a6f2a6092a": "a78046dc0d309163f61be4a4d1bc4e38",
"viduravijerathne.github.io/.git/objects/2c/8385b17effaa4c09919d473f11f0e84ec1f27b": "6149f1ee62f4b7bf5ee3219f1975af5c",
"viduravijerathne.github.io/.git/objects/30/196293c800eebccc49093e9ea3c6db33b54ac2": "ad3ad5f9a873148cd6f73ae0c0d9d85b",
"viduravijerathne.github.io/.git/objects/31/cdb058f5c2ebca6a81b96cec98d4948828d781": "30e897f66b1065965bbb230ab62de13b",
"viduravijerathne.github.io/.git/objects/34/9785173612027ffe16a5c6b45288e033f43c19": "cdbc5ff0861f682f36059fb173214d3d",
"viduravijerathne.github.io/.git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
"viduravijerathne.github.io/.git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
"viduravijerathne.github.io/.git/objects/3d/65447cf9bd54ed1f48248c6675a3f160ba84f0": "c6aa1212e7a0cccb67e2e0f6840131cc",
"viduravijerathne.github.io/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"viduravijerathne.github.io/.git/objects/4d/aef784e78c02b76129550c2d0bb8562f555321": "509390f2fffd93a017541b6a8056aa26",
"viduravijerathne.github.io/.git/objects/50/183491f3854798cbd1f84d37b0f966cf5a47ae": "7d2fa426f6272adb53c33f6b778665db",
"viduravijerathne.github.io/.git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
"viduravijerathne.github.io/.git/objects/55/cad2f74736aa2aaf34cf0245c1038b6f03b379": "15caa338f4c828cda06cff5e9503ba80",
"viduravijerathne.github.io/.git/objects/55/f03651695a5a3eb3320fba563a85f6a470797a": "67b7affbf1f3d2f47de0fed99cf247e8",
"viduravijerathne.github.io/.git/objects/57/416b2d3b2a45e263d05d82095168f8e441e889": "98b655338a88cc11b863e5a0a0ae1dbe",
"viduravijerathne.github.io/.git/objects/61/749286f6363cf5dff6b7bb2e3af0da68abe0dd": "ecd562e564313237436672cc32dd72ff",
"viduravijerathne.github.io/.git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
"viduravijerathne.github.io/.git/objects/63/6a2503987f3bb299e4fc8cd2771945c775b30f": "638fd35c625bf6abaf5a169016292801",
"viduravijerathne.github.io/.git/objects/66/962e0eaaef77e9c908a3973bc8262625adc858": "7fd06b3caf03b814339f4402c3fe8a34",
"viduravijerathne.github.io/.git/objects/69/b342fd0ca8edce0902faf1bb6f4b14f0b67e09": "bb41df013d79630bf4283de119fa77b6",
"viduravijerathne.github.io/.git/objects/6a/dc7e515a5b20849e50bb2c1978782ed8a22c49": "0b1080bc0627f167358ee4d10140fb66",
"viduravijerathne.github.io/.git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
"viduravijerathne.github.io/.git/objects/84/8d06f5afe3d3de2676911fd7f4b53502729636": "d3fd06a4b3821134ad7857a2861d0f57",
"viduravijerathne.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"viduravijerathne.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"viduravijerathne.github.io/.git/objects/92/c7a9dd731ccebc6b80ef2e890ff465daac9d41": "de8791ea38f3009ee5a63bbcef14c1c3",
"viduravijerathne.github.io/.git/objects/95/738322c6bf8655863eb30de6ecfa4780abbd31": "1299afe8bb023ae93d6d3bf33d4efc18",
"viduravijerathne.github.io/.git/objects/9a/4bd7ed52b564adbd32fd56f550c982beecf39d": "7040623048a3f12de434ab8be645d2bb",
"viduravijerathne.github.io/.git/objects/a4/4ee67e769811720bf052518484eae179bbaa28": "26e39aa649c0662e39801e75b7b28522",
"viduravijerathne.github.io/.git/objects/ab/d07a54168966ef29540e53ff2238f2ab10a4a1": "d35b1a6b5a0ace93e445b961e72b5ed9",
"viduravijerathne.github.io/.git/objects/ac/3f49f8030a9517bb77718ec3910ae35a851eae": "d9b761a61a7b7b1914517a215f6b96f5",
"viduravijerathne.github.io/.git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
"viduravijerathne.github.io/.git/objects/b3/32b86a32e87ae01292a020a0305dd41de99b36": "1c617f29f14091eb9c0a51fcaa220496",
"viduravijerathne.github.io/.git/objects/b4/be8418ff13dea75d1499451e746b433325c45c": "102e238567fc3580808d36dbbd97b8eb",
"viduravijerathne.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"viduravijerathne.github.io/.git/objects/b7/cdea6b311c90d1034d43a066f142f101aa7937": "76db4ffc2444b3de7625beab081bc96b",
"viduravijerathne.github.io/.git/objects/b7/f96a17789c996bde5fd9c2a725a37fb6f3758c": "85d68577596373f2f8a9a0b04973c8a8",
"viduravijerathne.github.io/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"viduravijerathne.github.io/.git/objects/b9/60d54a1d3e8a0122ee9472dec83e40190c1dab": "41286ebfaaff395908181906e5c29cca",
"viduravijerathne.github.io/.git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
"viduravijerathne.github.io/.git/objects/bd/837dde8d646e2d622fe2b81ca479935cfd22df": "46542130912f6cf7f8b1371ef5ea0f03",
"viduravijerathne.github.io/.git/objects/bf/8fbf073d599259fec79c6bb9fbb9769d7e2c29": "cc9852401ba289798e263ee604864a97",
"viduravijerathne.github.io/.git/objects/c3/0ff9f17e909d077ad0058e4cc3898585c32fdd": "a9a2da4ee68de04eec53150074e47bcb",
"viduravijerathne.github.io/.git/objects/c7/49acbd302f86e0498fb7fc15f71ae48d880dcf": "0b7b81a81d666ccc0364815f06c9839e",
"viduravijerathne.github.io/.git/objects/c9/245c6b31615f6498f70c3b477bfc6f48ce1374": "fb9d553604fe2c00389fce62195e944e",
"viduravijerathne.github.io/.git/objects/c9/c829fdb3bca10bd3ed6063cf2d97cdf3593b91": "6def8b08aa063f9f4608a69c56606a0f",
"viduravijerathne.github.io/.git/objects/ca/e341093cb2e96a27d40e333f7f5d2ba28a9c9b": "c36e00ffe09f661b9c31532bf53d4e07",
"viduravijerathne.github.io/.git/objects/cb/4e8d74de0aa201987e17886c721d806f2fae99": "9ea07680f8434f4ce892e7d3a33bec53",
"viduravijerathne.github.io/.git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
"viduravijerathne.github.io/.git/objects/d5/5f22227c8011b07439453805952cc777d113d9": "c91493e1cd7560efe962fedaa7e0904d",
"viduravijerathne.github.io/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"viduravijerathne.github.io/.git/objects/d7/01b5fef2c5d99f33b48cbc4764490db84e6383": "e95306a78709412e23c9d5ec8323f575",
"viduravijerathne.github.io/.git/objects/d8/22d5d556cdefd585775c4a0875135f9d8c5c61": "0ba9f9ec454cc84767cb4625fe25d33d",
"viduravijerathne.github.io/.git/objects/da/1c72347b12eebe0d35f28fe5b477d21474c901": "2e5406c202f23819dce412faba16c9fb",
"viduravijerathne.github.io/.git/objects/dc/24ffbac0954ef555964043219ab32dee20e320": "cbe89493cb3691749f7f539f9a0380f8",
"viduravijerathne.github.io/.git/objects/de/473197539f7b9c24f1ae17c54b30fc751f25df": "faf93e1088440178b885427ec83668a3",
"viduravijerathne.github.io/.git/objects/e1/baa3495d1c88aa8d60aaeea2c3c160eebf401c": "b375b8012de7f6ccb00a4939cd162bdd",
"viduravijerathne.github.io/.git/objects/e2/65550a9086e51172d0a5a4132445296a734872": "28ebc49d53096ed9c446b0af33cbd0cd",
"viduravijerathne.github.io/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"viduravijerathne.github.io/.git/objects/ee/1fa03588cc99eca9d0d3c9e67855ae8a321dc1": "91018314e30e87cb826a296a0a79a0c1",
"viduravijerathne.github.io/.git/objects/f2/7770b12ff4a8e7f9ed29008010fef0cd31a19c": "e1dca751a3cb620906524f0f0c585055",
"viduravijerathne.github.io/.git/objects/fb/5d3c681f0800f3a9270fc23896339e4c627b93": "f5765ad97872d3a681c03f2abc2f9d14",
"viduravijerathne.github.io/.git/objects/fc/a3ebf1a2c414d0ce22b96480254bcd0d01c3ad": "6aa6fbeb806bf2d07285424de4125e7c",
"viduravijerathne.github.io/.git/refs/heads/main": "c288ab23575c79726607c687c6f58eb1",
"viduravijerathne.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"viduravijerathne.github.io/.git/refs/remotes/origin/main": "c288ab23575c79726607c687c6f58eb1",
"viduravijerathne.github.io/assets/AssetManifest.json": "58cde7bfb268eb56939a6721635d6d8b",
"viduravijerathne.github.io/assets/AssetManifest.smcbin": "fde2ac5472a01182666b536e7b1653ff",
"viduravijerathne.github.io/assets/assets/metrix.json": "362f4cb1fdd7c9a5c889d3a08d09bb55",
"viduravijerathne.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"viduravijerathne.github.io/assets/fonts/MaterialIcons-Regular.otf": "f127bdda1d5e61e28f3c48560236b75d",
"viduravijerathne.github.io/assets/NOTICES": "d13b793ec6f0c437fd51b232d68d464a",
"viduravijerathne.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "fee5d0e7df32ece1e06b4a9be78f90f3",
"viduravijerathne.github.io/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"viduravijerathne.github.io/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"viduravijerathne.github.io/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"viduravijerathne.github.io/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"viduravijerathne.github.io/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"viduravijerathne.github.io/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"viduravijerathne.github.io/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"viduravijerathne.github.io/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"viduravijerathne.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"viduravijerathne.github.io/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"viduravijerathne.github.io/google08746703bcb73ce3.html": "27849a932ca43a7960a0eaef8dc1c1d9",
"viduravijerathne.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"viduravijerathne.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"viduravijerathne.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"viduravijerathne.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"viduravijerathne.github.io/index.html": "9dd383a85b2fd39953a66836b5a33b37",
"viduravijerathne.github.io/main.dart.js": "ee9be6c1da59d9a557636ef49ab9ced6",
"viduravijerathne.github.io/manifest.json": "b287b9bc704d0cf846c100200f1f521e",
"viduravijerathne.github.io/version.json": "af9d9a84f7fd9928f92336916e49b4a0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
