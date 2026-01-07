'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "4e7869c0906bc03832225a83f30cf7d2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4c9d0732e0394b2101fb05eb13e6a235",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d09b93d86f4d22e28c51806c53561c47",
".git/logs/refs/heads/main": "6f844c0db34f048bf8a7630d4dd7d3e5",
".git/logs/refs/remotes/origin/main": "d979f3d6c3dd2d05d55a233225860c9b",
".git/objects/06/d25a5eef08d989a1065cb0c6eb6ef99ccb7e7d": "a70870bd23b98851874546e5916a05f9",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0b/99f6edcb8b6a4ef9b6ec8e4034eb4c14cf0f47": "eb1d3722634b298f590d5992f7a67cd3",
".git/objects/16/097d9504c18eba6d41ca1c73b0b864cf58518f": "e0c0277bc9fa95544a9e55ae54e2fc14",
".git/objects/18/f88671b1146aeee0c0b4b6bc755514c6446289": "eccfaa1fd9944c17b87e58bc6e065ec1",
".git/objects/19/b18bb14e32a6ecaa197374db1e2b395f84edaf": "c67020375a24f77872586ce6bb5980c8",
".git/objects/1c/b4e4cfb9a1b5fa5d8c938ed23458d81a965c94": "5d3c6385a8de7a6d4a9d837d524086e5",
".git/objects/1d/3d13776ca0b1155f80bca3a74da83cc97e8af1": "8f22ddee5a8eca4f71354b701537f36b",
".git/objects/1e/86e68837353f032f506eb21325904b56b40c82": "05133c77096646b503dcb827ab2ca080",
".git/objects/1f/8f7eb658ad3653009610141ba4615ea984f07a": "82ee15c139405090b78c5a37021d7e1c",
".git/objects/20/1a77dd82a0fc04a2150f545e1471d803089b12": "cd43a7f79ac3ad1bdd7621160442de7b",
".git/objects/31/8e6aecadb77ab9326eb8dbc8740c296f1f4aa3": "d1bf2a1295531e8d99389f5d6e476dcb",
".git/objects/31/9a34a01fc808c9a84b80d30ab86191551b544d": "2198a75e9911682c6c336e2792ed4872",
".git/objects/36/2304a26bedb9fe49ad26eeca393416167504fc": "9807e5cb69e9d573ca28178c35ea92bd",
".git/objects/36/832e4c7d70ef8d3f40cc939be1f26689bebee3": "1a25834821f14178b66cffdc47d1c79c",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3d/c8d0747f1bbe1d367bc82ee8a3ff901517e1ac": "63c3f92e31a016b84d2bdac06446af28",
".git/objects/4a/a68299c72c4284ad1edd8be7c6967c41af0ba4": "0b89a57c9bc305492aaa39354f5dfeb5",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/0ea52d71e35e65da3c8416b01b8c0ccc84f9e5": "8af8b217262b5150f4e0162b19818ea3",
".git/objects/4d/88cf17d039c1e1bdbacfb59ea771c78963311f": "295bc54d6315faa56519ccad28d9f63a",
".git/objects/4f/22017a92f52a0f3338b1822bd5684bf34eb609": "bba756f5951bcbe57d2c1f859302f8ba",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/58/36884e28ddf44e3283aec48c5f22c47e20abc4": "864ee1b2cb97303720d1a04f4eabf500",
".git/objects/62/9b3b2905d8a02a206a5209e59304f32a9f6d46": "20aab67f60dd6b5b9eb19c002bfb63e8",
".git/objects/65/243d8b25739d78b402a2292e29f49f78bd103d": "2d0832752d91b800ec8a8500ba069061",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6a/483ff2f4b97fbea1e1a8dde03e5e8291f77a5e": "eceeb191fbc2416ed970221147f9378a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/f43d8d46770080e8deb88699b0b4dd7f5374f5": "aed44b34f0f74b149d5937bf3b13357d",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/72/5924e70b84f1b4e3713a2f64d76af2e3be70f5": "af10de8183c4d3f580bbd319d3d87935",
".git/objects/72/e239478fbb153ce6ed68a54ee89c56d8a5954d": "b8e9bf103549cdb1529aeeaf88af89c8",
".git/objects/77/d75acfb74d8c2b323283ca9973bfa5d6f61181": "a629afd1f76414fb2ca9ab1997ed3931",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/81/44b4f3e958299da464e528f2b4263446aa7e25": "b007cfb25b6a1acd5412af9b13039693",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/5e5a4faba190732ba85b9ef70dfc95514ed5b5": "d6401e35509594e26a63281e956b57ae",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/90/299017d2e762f4746849eefa068196c0f4375e": "771ff6902906de1c71146e179d3a74fc",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/95/fd6054981288c24abd8222c6de2562a60a1ae3": "8d74947e40fe2d5cc40255df5e3e2f6a",
".git/objects/9a/dff57853aaa0c819d6a16140e9f06ad2963711": "3b7331f80e7a75f7244f7fc1581eac87",
".git/objects/9c/985fe77f963954571132ca418604e5cdbf0376": "d564e14ed10b92c6d54968fdf354019f",
".git/objects/9f/807fc02193457b74abb88c92e0479b2b906609": "59e90622f38e88fc197569eb7f69fe2c",
".git/objects/a0/abffaec37791ef3414ab6e743047b88deedb30": "5f8f584fbffa2ca71634bfc10ce7f135",
".git/objects/a1/b624189745c43945b08c22427d2010e066e868": "dc7f2c6df84aea08e5a6c6d0ba5b2d67",
".git/objects/a6/ab7accd0c268f3d0093ceb648416a70d7f757b": "5bf6c63c5a1a5c9aa12dd236baf2c94f",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a8/5a6b7f97afd9db6825aa530db21511c819e74c": "857e49cf049fd4f2cd8e7d4ec513ab0c",
".git/objects/a8/840c55ba6001cf0eeacce91ba0a97c6f07ce02": "df8cb3c633cb23b2e3b62a78e8f3de90",
".git/objects/a9/2c8dc729a6c9b2b07fd8cd562d631281576952": "f96368b6965c138b9c2a49e6ab955c3e",
".git/objects/a9/6604e4807f6d05bad4814b7a95493823a3cb81": "5301b7892b5fba7742e8758233361f91",
".git/objects/aa/5e848aa7bc4558dc2010a1e8fb85a34feca2e6": "8155a3b097ba8d91ce8c9d19c560ce46",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b1/462de808841296456cbc5febe5ed7e111d7509": "60ccb23d73d0e86ba1aa4d1f46097de4",
".git/objects/b3/cfd71f17567fc019882a3806934c7811a1fb95": "c23b9bcf9ce913fde6868164a659057d",
".git/objects/b5/0488b872b69b89bbcf0845b7a5babc430565d2": "3c6ead16f00caae78f2eb97ffbe56b9e",
".git/objects/b5/1642e77fc0ceeb923af2100b4ec6a44a928401": "2df5d1ecb37294519bb4515a99cf89ec",
".git/objects/b6/1c3da4c7b147e8bd23f2b591318e9af3222043": "a9efdd287ac23f70df6ff99bc103a1f2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/1ccfaf3aec8e1653f71f6c5ecd161275026111": "0c268e0cf3079b87f49209c7415eb8fb",
".git/objects/b8/d2d2cf26c8e1fc3b01a0b720abf34624feca37": "92c878ae1d504bc908f3d9fc91163915",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ba/f24217d692391d4d572b259befc94fd955ef02": "7b905e431a113328b2efc57a738b0718",
".git/objects/be/aab92236c8cb5bba5a03ee5d695cc78dd32e30": "96206ecf723053c36f3581b9a2be1007",
".git/objects/c2/b865eb1cdebe364565767c801d492dc76874dd": "31b95bdc663d971f6217b1cf700b224f",
".git/objects/c2/d04414d69f41dac0436ae1b61d7bad13bcbee1": "4cb2536c96a9192d3ce14016cf96b252",
".git/objects/c3/dd46149cb70a45abf92938f71d0272e6833160": "c888897f211d603861659906fab4054a",
".git/objects/c4/e3a155b7bb7f2f6b3399590577f999e1d9252d": "e24e321021c74926404fc904ab1b3fb3",
".git/objects/c6/4ea0211d7b9aae519f9f6f575366763faa32e2": "638ac3216eb147244f13a9557e477b3a",
".git/objects/c7/42a9282c07356286a3e2ba1d445669b80a4d4e": "9ce1b7085712f678988ebb541db85fc6",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/5ce7bf52265eac3587acfb26c4fff572f9ff13": "babb55f36097158eb91ffe657a92a4a2",
".git/objects/cb/c80694f99eb931d697ba19deeeeea271be8c03": "5b0e33b5593d1fc70363b050b0c3984f",
".git/objects/cc/a9b25e1b443a55a7ac77a081f0a7827581b9e6": "c272cc5360229977f53fa2fff7032196",
".git/objects/d1/d26577796cf996a213c4ee77a2ebc4ffdd4214": "eb4440906cdb8d3fba668ac81f0c76e0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/4d34f76f04fc7f71243b988d3cfee1d5435226": "d389c0e3a2acc1364191db170ffb15c9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/de/9ae4801704045cf5e19460372091bc6302c99c": "b0cb985a4b9e5ca005efaa7a018baa2a",
".git/objects/e0/e97d85835b8c40d3436ffc5f5e3d1d371c2695": "dbbe08705d3a83eb38bfea3779485747",
".git/objects/e3/f62bf3d8ddb6e3353c99a8b53cd0eaf769794e": "ce5afd7fe2677503af141f4c860b6549",
".git/objects/e4/3b1d8be4227efa7c4868f183c136401c465289": "704abffc7de83371833a5e7ba14e46fe",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/89c4afb978b8c36b7da9006d64c11f34289395": "fa598658311fe44277fa178a354d49fb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/281bcadd849685bf49666cdf692ebe3beab696": "54e063313029e3b6fa491a39a816e3be",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/d163b1fd01ca1ba9eaac1f4f3b5e024126eb93": "96a96c24d9f4a1f017846ef311fd7279",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/db276cb205a8d5e95bd7f9e349fc387520caa8": "d1cedf0e33d4585dd424f4ccf9734192",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/a65dac4c48041f7df5c87ce081f598b2647d41": "154890008734b1ceb83060d14dfa3cb7",
".git/objects/fa/20f37532309ec2bb7651e91355d7c7d7b57331": "8b44d9007789b29b8c887399c69cb189",
".git/objects/fb/4b518b233032a22cd208493cf0ee0b19f2a2e9": "c1ef38b5cd4aeebb212cd6734a850c46",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "c5186d7925c112cedc8f3478ab311fea",
".git/refs/remotes/origin/main": "c5186d7925c112cedc8f3478ab311fea",
"assets/AssetManifest.bin": "86379ee738d61b8f92e446b9086aa7ed",
"assets/AssetManifest.bin.json": "e4ca171de7bd20b6f2c12719cd61afe7",
"assets/assets/fonts/Ballet-Regular-VariableFont_opsz.ttf": "66c94c37309db6a7b02bc989d76ffde7",
"assets/assets/fonts/KalniaGlaze-Regular.ttf": "1f7f29c79bc40c624d04a3a006c85ef1",
"assets/assets/fonts/MonsieurLaDoulaise-Regular.ttf": "e0226e07748e96abeaf488f273c31ee6",
"assets/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf": "05fb71dda96f8396e5639225b0d1c036",
"assets/assets/images/angels.gif": "6c712bead67c0bc68bbe7314033c73b4",
"assets/assets/images/angels2.gif": "c3302e4beaf3072f1206f6b892466dca",
"assets/assets/images/background.gif": "1f067e795fb014f981e1cc77782232fd",
"assets/assets/images/background_books2.jpg": "d89582e0f436580ed6a6dbe8e550a70d",
"assets/assets/images/books/linux.jpg": "275a417bb294fbf078fe05c9fff2f3b0",
"assets/assets/images/books/metasploit.jpg": "7b1a3ef352b993d14e7e31592b42b349",
"assets/assets/images/books/python_hack.jpg": "959f2f19a77b9dcbe007a802db45221e",
"assets/assets/images/books/vicious.jpg": "d68885ff0a86441cc8afdc54ef7b35e4",
"assets/assets/images/books.gif": "b6404cc843d4df15f37fc671314c7347",
"assets/assets/images/contact/ad1.gif": "5c74d2e0caa640be96c179a53c380071",
"assets/assets/images/contact/ad11.gif": "c150fb133eed3b87a3316d3c37279abb",
"assets/assets/images/contact/ad16.gif": "7de50028bb7bc8e8e7f8545a95e408c9",
"assets/assets/images/contact/ad17.gif": "977edc3c275dffab5218ea3604bf8879",
"assets/assets/images/contact/ad18.gif": "836ab0b521201f8517b5f0da6e3d6976",
"assets/assets/images/contact/ad2.gif": "1cb2c96883a23c717d250522a5c1ba62",
"assets/assets/images/contact/ad20.gif": "87b2f2679d6ddbb667ae44aa603fb9aa",
"assets/assets/images/contact/ad23.gif": "bac9e3579b89c1afbc2432eb4d0bea66",
"assets/assets/images/contact/ad24.gif": "b771152510e8c1b736a4bd311bbc7f77",
"assets/assets/images/contact/ad25.gif": "db1605448df4d55369210d08ff372c7d",
"assets/assets/images/contact/ad3.gif": "24bfe26c347c031fbaa2906ab0d407d3",
"assets/assets/images/contact/ad4.gif": "f1976daa728855b2ed234defae389c04",
"assets/assets/images/contact/ad5.gif": "1d9b83201b7cdf5fa920fe01ea2724f4",
"assets/assets/images/contact/ad6.gif": "41fa806f4211c4454f51aed40307481f",
"assets/assets/images/contact/ad7.gif": "6d13583402bb2e28328ec6cad8e76489",
"assets/assets/images/contact/ad8.gif": "04bb4db824d32243210cb775724d8017",
"assets/assets/images/contact/ad9.gif": "d7b30de5f2d9d1429f65d4848475996e",
"assets/assets/images/contact/background.jpg": "5d7d09667bc2b65d51b99e1545e0ef3f",
"assets/assets/images/contact/discord.gif": "8f7bb7ee52d1bbe4eaaf4dfd33c7b688",
"assets/assets/images/contact/earth.gif": "4379e995ac957ce3ff1d112b3e9e4797",
"assets/assets/images/contact/email.gif": "7e724213d168e5ac1eb481a704412af1",
"assets/assets/images/contact/emailme.gif": "86db46e654e3b8eb5d0d6b19e9e754e6",
"assets/assets/images/contact/empty.gif": "e9ef6852fd35fec7c8e5e002285705d6",
"assets/assets/images/contact/git.gif": "9ea298f4bba44e2958ec457ba36c1e50",
"assets/assets/images/contact/spark.gif": "ee253b9e996eeb539a62fa23f69f5af4",
"assets/assets/images/contact/twitter.png": "7c63c31f79fc0bd019114f9bac0641c9",
"assets/assets/images/contact.png": "35b20ee1afec7f166efbaa95be0cce0a",
"assets/assets/images/frame.png": "1ff896047b0982dc98a6f53046b2475b",
"assets/assets/images/frame2.png": "083e1aa30affc27f2983586613cd216f",
"assets/assets/images/home2.png": "365e73956919920fced0ea015dcb67b2",
"assets/assets/images/library.jpg": "110ea9c2e41596d67a2f275be2f2a593",
"assets/assets/images/music/bg.png": "5b515dfd3419099e315d609ac7e24e59",
"assets/assets/images/music/candle.gif": "98f1c6cbb575755bf7f7c3972f0764d9",
"assets/assets/images/music/candle2.gif": "21426f26aaa48557ac9bec694620cb9d",
"assets/assets/images/music/coffin.gif": "4e978745b0246d965b9af544a9564551",
"assets/assets/images/music/ev2.png": "6c40fe68af9682e507ef699824516939",
"assets/assets/images/music/ev3.png": "60ffc4e35fe76f3c7873c451655958e6",
"assets/assets/images/music/fs.png": "367b3354607665cfe2f994568e43cf4e",
"assets/assets/images/music/him.png": "d1bad5271a471cc843519fabe4c83ef0",
"assets/assets/images/music/him2.png": "2b169e56569b105d982c6b249d3157ba",
"assets/assets/images/music/mary.jpg": "3174ab5fd45286e4e632c546e567e1b5",
"assets/assets/images/music/peep.png": "1ca805add01b9c702b207fccaa655af2",
"assets/assets/images/music/pf2.png": "ef9de92c5cdc3832a0699d29c1634bb1",
"assets/assets/images/music/pm.png": "1a597fcc27e12728e6f21dc79c3ae0a5",
"assets/assets/images/music/sb.png": "201bbbf6d92c076d8e3d33e4c0585acf",
"assets/assets/images/music/sb2.jpg": "469a2070764b3e70b960d99db20fa6eb",
"assets/assets/images/music/sb3.png": "24d11fbb41caabba69eab1a74308d73d",
"assets/assets/images/music/tape1.png": "7903bf932d95cebf11c14c730701dc78",
"assets/assets/images/music/tape2.png": "825ae707b818f4d795fec089adf71c40",
"assets/assets/images/music/tape3.png": "87eb30ff64976af5397ef999112e0d1c",
"assets/assets/images/music/tape4.png": "b8c91a9a18ae0c435644a373c2263f51",
"assets/assets/images/music.gif": "625977049d01d91efa29874eab6c6e53",
"assets/assets/images/paper.jpg": "640bd6389ce36a2bb42e85b34bda4fab",
"assets/assets/images/pfp.png": "e87cc8ac0a808098d65a810b28ab7042",
"assets/FontManifest.json": "6d5fd46e51b2e9e566df200fad01975b",
"assets/fonts/MaterialIcons-Regular.otf": "7abb612c243fa9d26d4f7f481129108b",
"assets/icons/cursor.png": "a7de90f7286eb188460b2c4c3a92f41c",
"assets/NOTICES": "3438140343c661f11065539ecd000c7d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "eee2163fc7258ae826520c555be20ea8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e258c13b8d2f25c9642920f51b893b07",
"/": "e258c13b8d2f25c9642920f51b893b07",
"main.dart.js": "97fa256c9024cded5c98d0cb79298a2c",
"manifest.json": "8212bb9d48e12be4478e5ecca6ffe85a",
"version.json": "c8f979d408e51acd1ee06f6af9b9722c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
