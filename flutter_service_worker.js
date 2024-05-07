'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "54dd8952478b69cab72952947bdb0cd8",
"assets/AssetManifest.bin.json": "a1ab222530b061ca875e343c6bce73b8",
"assets/AssetManifest.json": "0df4e997d906ac99fd647524588759b3",
"assets/assets/1.jpeg": "9fab54d0518b01e969863c273d77a5ee",
"assets/assets/1.jpg": "99255a53301d7005d50737cb3fab7054",
"assets/assets/111.png": "299f5824004dcdc6dffedc981f3aa03a",
"assets/assets/12.jpeg": "7724f554398470e240c5685061c74b8d",
"assets/assets/12.jpg": "4feadf7e851bfd3b8d1f631aa657d686",
"assets/assets/13.jpg": "c4be3a3820752e14737527772e51e905",
"assets/assets/14.jpg": "aab3b7858cb74302205c120f700762a7",
"assets/assets/2.png": "d686a77c082c2e9430e5ccedad213602",
"assets/assets/3.png": "afde79b0f20237956b68b08bd09ed5b9",
"assets/assets/32.png": "8370f8bf77da6afc218242783acc6353",
"assets/assets/4.png": "8268a8756f171d6e318f0b428c4f0149",
"assets/assets/5.jpeg": "490aeed0573c1317506603c556590012",
"assets/assets/5.png": "c7e49ec282ad711a62d13f2656d2fad8",
"assets/assets/6.jpeg": "6645a2e079715981d7e545789494505b",
"assets/assets/8.jpeg": "73982419e69785ef0cf3c50831d7a866",
"assets/assets/9.jpeg": "a4677b522d78fd7f5e97a95ae252fd5b",
"assets/assets/d1.png": "68191d37546d378f5800aa191879c6e9",
"assets/assets/d2.png": "930b493c76bc7a7c6652ba7f2b7193a1",
"assets/assets/d3.png": "2e20ed92b3df1b43372cc406c2d12c81",
"assets/assets/d4.png": "1a9ec1735bec8696b710ddc052570046",
"assets/assets/d5.png": "7aae08015eac04734a198108dc19b911",
"assets/assets/facebook.svg": "0bece952d84905b8363ff5f8be18b0b9",
"assets/assets/font/Gilroy-ExtraBold.otf": "6a4b4cc92c2bca1cb586071fa1752565",
"assets/assets/font/Gilroy-Medium.otf": "8b70347d584923c037790b37b64846a2",
"assets/assets/font/Gilroy-Regular.otf": "c5c93e2f551fa62c0d4025e0ddb37cd3",
"assets/assets/font/Gilroy-SemiBold.otf": "be451aaf4e2bdc7bd0318200d730f3fd",
"assets/assets/global.png": "27fc1807925c4645ebed4c733e0aae4e",
"assets/assets/images/-symbol.svg": "f1d2fc30787f34895bc316461a21047a",
"assets/assets/images/01.png": "577112783db0aaa7b19859c653db79e5",
"assets/assets/images/02.png": "09df3d46899825ead6aa320a218d060e",
"assets/assets/images/03.png": "a804a056aff3976d49051e12c32fea43",
"assets/assets/images/04.png": "c478c8fd36c77aa3aeb40513b654a758",
"assets/assets/images/05.png": "7e63dd8786963f1b5e71c43df9a65106",
"assets/assets/images/2.jpg": "7b495b56f4849a5f4fc9970e68690ecf",
"assets/assets/images/3.jpg": "e68ff6b86034d0f15a4811afdbbe5712",
"assets/assets/images/4.jpg": "2914d2ddc28808a6b57a91879a447b37",
"assets/assets/images/5.jpg": "5eb71b41d475e2cef8013a08b52486ea",
"assets/assets/images/6.jpg": "e9db83c2eb4ce70bf2f29662aaa8c954",
"assets/assets/images/8.jpg": "c717d089bc840cb1930ccee284658cdb",
"assets/assets/images/a/1.jpg": "3d7ab478b0f263e1414373d2398636dc",
"assets/assets/images/a/10.jpg": "3202da85ceb907d1d0d04f867464f911",
"assets/assets/images/a/11.jpg": "beb761b46dac8d38aefa216c1ee0d1c5",
"assets/assets/images/a/12.jpg": "42b3a1f7f1e0f8c5ec6f7d6373deaaae",
"assets/assets/images/a/13.jpg": "b6654e55240becde2e1d6fb9832d3f40",
"assets/assets/images/a/14.jpg": "54d6be209fca30bb3ce70ef54dfa5b54",
"assets/assets/images/a/15.jpg": "c98b4b71641852348694d5725464cbcd",
"assets/assets/images/a/16.jpg": "41b89189a177639068841e03a2bf29e3",
"assets/assets/images/a/17.jpg": "0f8de0ebf5acbdb6e8104255c1105d2f",
"assets/assets/images/a/18.jpg": "1314193099431fcc327aa1f50919b5a6",
"assets/assets/images/a/19.jpg": "d38f08471c90b18aa23dfd9c9cec0d36",
"assets/assets/images/a/2.jpg": "958002b9242c0412c3e7e4e8eab0cd59",
"assets/assets/images/a/20.jpg": "81aa4377d48d08e88b2c2102711e3681",
"assets/assets/images/a/21.jpg": "ad266b1d9cc3577d4c16a64bf568fa1b",
"assets/assets/images/a/3.jpg": "68467b67921533d6bfb72ff60a96f8db",
"assets/assets/images/a/4.jpg": "55c8a50c7cce78866d9564bd86a0b393",
"assets/assets/images/a/5.jpg": "8d278543f4af42e198fe0d271d65b963",
"assets/assets/images/a/6.jpg": "03d4b28317476f5142d39a4eb624c54c",
"assets/assets/images/a/8.jpg": "d744e93fffbd5661f350e237c8bc66ed",
"assets/assets/images/a/9.jpg": "dc3137133e2ef02d6a508760146f098d",
"assets/assets/images/add.png": "6b6e6267427580e63efcaa389bd820aa",
"assets/assets/images/ae.svg": "1bd29fe5334716d2f21e0a6be3e7c858",
"assets/assets/images/Amazon.svg": "534aca14cf8fe189acd75de9e5cd1b65",
"assets/assets/images/apple%2520(2).svg": "b9770171fa16065a1a6bf44e983de40e",
"assets/assets/images/apple.svg": "725d4f188fecc7d857c5a8e668ec4dac",
"assets/assets/images/archive.svg": "97c0d804d4d9bcb7e11ca61c849b441a",
"assets/assets/images/arrow-left-small.svg": "5005d41aad9c739d54639079ccc02f7d",
"assets/assets/images/arrow-narrow-right.svg": "c80d213f024129b0cd0eec36d6ad759b",
"assets/assets/images/arrows-down-up.svg": "39b1e8efae6fa05b7d56c15a4e9106bf",
"assets/assets/images/Ask%2520Mastercard%2520Logo.png": "55e28b762a43e8e359a8173e63f6e7bb",
"assets/assets/images/avatar-11.png": "34e65d3f50667676be2c8ac9f6fcf0b3",
"assets/assets/images/bell.svg": "14583a891afb279ffd30c5790e7a87de",
"assets/assets/images/bitcoin-circle.svg": "5b9ae164941c15e20d86aac62abf34c2",
"assets/assets/images/briefcase.svg": "69d952f20cbdcadbc8e323c7bf92428e",
"assets/assets/images/btc.png": "c10ea6af4e8a5e62961330551b0cdda4",
"assets/assets/images/calendar.svg": "5b8c022ae45c916b956792800d0881d3",
"assets/assets/images/card-2.png": "211f8daa9ffbf55c13c9bef8e8e90233",
"assets/assets/images/card-receive.svg": "a719dc3a6dff5fbee577909eb579d9d8",
"assets/assets/images/card-receive1.svg": "0008342801e1d720abf6cff9f9419340",
"assets/assets/images/card-send.svg": "8e5ee7aa0281b0e9368d306f110dd53d",
"assets/assets/images/card-send1.svg": "6ff3b6cb4d9b615e2deed993325a89c4",
"assets/assets/images/card.svg": "f1652bf86156ccdb7c1c8c0016b16d94",
"assets/assets/images/cardbg.svg": "3e58505470c3ae73fc2e9b9e2018c740",
"assets/assets/images/chart%2520line.png": "7d7b74f7258b1ce94ee7ecc4ca1ec6cc",
"assets/assets/images/Chart.svg": "6461e1a48d2b07567addd1405142d23a",
"assets/assets/images/check29.svg": "a2515160d01f2288e66c584938f89385",
"assets/assets/images/checks.svg": "c782ca645e7ca2427205781ffed0bfcd",
"assets/assets/images/chevron-down.svg": "129d6d392523a2092f5b3cea739f7049",
"assets/assets/images/chevron-left-1.svg": "c0ce81f5ee0a9e1c81d2dbd7278116e2",
"assets/assets/images/chevron-left.svg": "8bae63c91d7f364b9ed08726397ccd65",
"assets/assets/images/chevron-right.svg": "65929b0d0b63497585e6617808177da3",
"assets/assets/images/chevron-up.svg": "0ae31d3f0790e4ff79f7c67bb6e1e7be",
"assets/assets/images/Chips.svg": "e4e7b163d018ddfb03c3a432d86b5c3a",
"assets/assets/images/Circle12.svg": "a844d1d2bad1326552c4215a3b2893a5",
"assets/assets/images/cn.svg": "56b3b84753a5db984c09bd140ef63f3d",
"assets/assets/images/coin-convert.svg": "785d0bc5c66ca76634e53223c815c57f",
"assets/assets/images/copy.svg": "81c43257a76363528bd4c446eab0bfea",
"assets/assets/images/credit-card-convert.svg": "c0e5e35581a7f45d2af7149f1c4f5c3f",
"assets/assets/images/cryptocurrencies.jpg": "459ea2558a0b67bb6a03baa05940e855",
"assets/assets/images/dashbord.svg": "c7fd32c68ed3d4025f083bef90ac914a",
"assets/assets/images/de.svg": "f88b6005d202a8b0782b147e8554ebb3",
"assets/assets/images/discount-voucher.png": "34d01196e65326e685d56bcde7a71f4e",
"assets/assets/images/document.svg": "6cb2fbd13092e7e1e629a1ba9ac2b321",
"assets/assets/images/dollar-circle.svg": "af27db38365c5afbcf2383af2dba8f55",
"assets/assets/images/dots-h.svg": "a3c1ac3fd89e67215c220ccb08349dbe",
"assets/assets/images/dots-vertical.svg": "45a36e0e62a7a80ebf43ffe737d7f5da",
"assets/assets/images/dots-vertical29.svg": "b61656c9ca9d7ee62595d0fd6ccc3e9d",
"assets/assets/images/driving.svg": "a4ca3330a2ace5f6ce7956412669c287",
"assets/assets/images/element-plus.svg": "8651e3fbde9114ef512971ac2c4c95db",
"assets/assets/images/element-plus1.svg": "9d89ebfb4d191718cdbb2707bca8bac2",
"assets/assets/images/Ellipse%252077.svg": "6b6d68e676948469450339f9b2221684",
"assets/assets/images/empty-wallet-change.svg": "64ab03d1467d46a5cb4a247b5dd4b098",
"assets/assets/images/es.svg": "07307c71dd2ff0259f18ac8d1a33bde3",
"assets/assets/images/eth-1.png": "9c00e9dab817789ef9ac99734b6b565c",
"assets/assets/images/eth.png": "01b2cd632fc05a218d6e52748f0f675b",
"assets/assets/images/eye-2.svg": "011dbeb6165f08b3467f3e85723a03ad",
"assets/assets/images/eye-off.svg": "d352b1527a191dc9c328c6bda03d6d60",
"assets/assets/images/eye.svg": "2bf5192fe143deafbf7a5033517c3f30",
"assets/assets/images/file-download.svg": "f89f7f3ed14475b3ce2d44478d5ced1f",
"assets/assets/images/file-text.svg": "c021ebeb75368be6ea71ac35676f01b0",
"assets/assets/images/Filter.svg": "09b75b2f3f7a24f977bd0fb4e54afa60",
"assets/assets/images/finallogo.svg": "45c5d262a6f3633e44337c46ca81635d",
"assets/assets/images/finallogotext.svg": "bb6b6c83021cec53d6b9fe7966b07570",
"assets/assets/images/fingerprint-viewfinder.svg": "62f926f59797587db7045eea3d30c330",
"assets/assets/images/fr.svg": "ac687ca1cd9d6c63ca74392e4e544316",
"assets/assets/images/Frame%252024.png": "9b90e0b0c45ac686473a067c1dbb3aa5",
"assets/assets/images/Frame%252056.png": "8e548c88ecdb977252ad819135038f8c",
"assets/assets/images/Frame.png": "14a3b4d8d16e868bd007bf7021af98a5",
"assets/assets/images/Frame.svg": "02d2b0cc14f2e748d663787d4c8436c1",
"assets/assets/images/google.svg": "764eeb314fda41537c1517631b3f198a",
"assets/assets/images/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/assets/images/Group%2520254.png": "be9adcb8b52820f897822085f22a0abb",
"assets/assets/images/Group%2520255.png": "94777cdeb47aa873341a5fde863bba1c",
"assets/assets/images/Group%252047984.svg": "7ce6e91e92f1a61b74598fd92a28c83e",
"assets/assets/images/Group%252048563.png": "c85489bbe2075e215b57f3df62bb1adc",
"assets/assets/images/Group.png": "7d4fccb86289ca87b974834eee112f91",
"assets/assets/images/Group.svg": "6417e7bedbd1380e3e5b134d36d416e1",
"assets/assets/images/hero-1-img%25202.png": "e3dcc89235d906fdeca4ee85b66b8735",
"assets/assets/images/hero-15-img%25202.png": "ac387b4a63a1ed0728cbd7806099650d",
"assets/assets/images/heroicons-outline_trending-up.svg": "c64ccc22b120495cf438b547af9df040",
"assets/assets/images/home-2.svg": "d33bae934b144904e0debc9c931b670a",
"assets/assets/images/icon%2520(1).png": "f45f19bab401b9668001f9ca8451f990",
"assets/assets/images/icon.png": "cf58e4df7422337752a2d29e1db6548f",
"assets/assets/images/icon33.png": "362528b8e83e17bfc269316c89321352",
"assets/assets/images/ike-outlined.svg": "7c57bde04185542df386c906cdcb5946",
"assets/assets/images/image-1.png": "a9b036193683421f6130fb6e057c336e",
"assets/assets/images/image-2.png": "045246d0f86733f57106b01db13b9c63",
"assets/assets/images/image.png": "1e472dc63645dd3b0d66e1132acafeb3",
"assets/assets/images/in.svg": "9283eca3d8edc2ec6f74d53d9369e52a",
"assets/assets/images/india.png": "1dee37b88f3a1cffe556f50f770477c0",
"assets/assets/images/istockphoto-1032066158-612x612.jpeg": "bc6c3f7eebdbcfc43a559ee61edddd5a",
"assets/assets/images/istockphoto-1032066158-612x612.jpg": "8210c959c782c9dff62bc63e258ef5e3",
"assets/assets/images/keyboard.svg": "fc75ef73bf904f4d3336dde15b2b0cf9",
"assets/assets/images/L6o2mVij1E.json": "958d059a210721df00c2d98ede2012a0",
"assets/assets/images/laptop-code.svg": "58efe50d5d47888e7848aab3f2b34499",
"assets/assets/images/link-horizontal.svg": "4168dfb03cba6281bdc66d8bd20a396a",
"assets/assets/images/link.svg": "0fb5943e13a0e201963ae7473bac2f71",
"assets/assets/images/lock.svg": "9b61bf85940f9b547b63bc7fa447e264",
"assets/assets/images/logo.svg": "14efd44d2f4c64480799dbc21e080208",
"assets/assets/images/Logo3.png": "6bbac2025c430eeda632ac7a74504a0d",
"assets/assets/images/Logoo.svg": "76e7a6b639549ffbca71faffa9ffc04b",
"assets/assets/images/logotext.svg": "b3226efb6c9fa7a44c4193cf6817577a",
"assets/assets/images/mail.svg": "7a26319dd36a1e6021980cc4170be04f",
"assets/assets/images/mainlogo.svg": "8bdb64e21e198604b7c8e69f71614e1b",
"assets/assets/images/map-pin.svg": "c9f426a63e516e83162b783598009461",
"assets/assets/images/Mask%2520Group.svg": "9230d28fcc0df0335099d744ce5b190d",
"assets/assets/images/mastercarde.png": "e30108374315534433f5442e1b8dd56e",
"assets/assets/images/menu-left.svg": "9ad94f8f83784cd1374557ba87a86d21",
"assets/assets/images/message.svg": "bc41696ca446967631d6c369bb1a9348",
"assets/assets/images/money-bill.svg": "ccf9eaa1da060086201971e63d6c664f",
"assets/assets/images/money-send.svg": "8aafa189782b8623607cb3d90938e72f",
"assets/assets/images/mood-smile.svg": "0d565e342bed1309a4e7f2f95bfc9292",
"assets/assets/images/more.png": "3d09a6c4016c9234d7e4f5cd27245838",
"assets/assets/images/newlogo.svg": "a2ea991f3fc8aa11aa32262478492bb1",
"assets/assets/images/Overpay..svg": "a3a3db974f77e959edfe5a917b4909f1",
"assets/assets/images/OverpayDark..svg": "0f684a702bbf5f4c024739015484a385",
"assets/assets/images/Overpaylite.svg": "a3a3db974f77e959edfe5a917b4909f1",
"assets/assets/images/papers-text.svg": "794470f06eed499221ad6c79510f770f",
"assets/assets/images/Path%252056640.svg": "a202ae01d4116622b549ab5b74586182",
"assets/assets/images/payaneer.png": "8cf85e4498a51b522e4a6cc12547a2a3",
"assets/assets/images/payment_online27-%255BConverted%255D%25201.svg": "9d88b82e42ea7bd54f085b115a7e3384",
"assets/assets/images/phone.svg": "438de13f98409f6f626aa2b6a8729abd",
"assets/assets/images/photo.svg": "42b04b461470acec1493f54120158386",
"assets/assets/images/plus+.svg": "00924a5c7a67e0c60c2ff3145c60080f",
"assets/assets/images/plus.svg": "b7c153cccdac392ef4116fad34824642",
"assets/assets/images/printer.svg": "aa5969d504682767e02a4c277c9b297f",
"assets/assets/images/pt.svg": "06dcb9596e315b89ab8cd2841d41523d",
"assets/assets/images/question-circle-outlined.svg": "1fc424749cbcf6e89d6601bb41920a01",
"assets/assets/images/receipt-edit.svg": "6aeb5d9865f7ac79386ceb0b4f5f45e1",
"assets/assets/images/receipt-tax.svg": "671ec9084d94723071218d783df2ddc6",
"assets/assets/images/receipt.svg": "f32294df0895d0117f5209dda54afe49",
"assets/assets/images/receipt1.svg": "1cbfe4453d09af28622db6e540ecdea7",
"assets/assets/images/Search.svg": "7046b7fa32b3580e41c01db3d06a1729",
"assets/assets/images/settings.svg": "2ec87afcdfbf418b33e3c78d9b78c5c5",
"assets/assets/images/share-two.svg": "4e742b717a3334b3c852c0443957e305",
"assets/assets/images/share.svg": "9897356e36ba03966c1326d2e4dbad41",
"assets/assets/images/shop-add.svg": "e1539ecd1afd0e328c0bc5c038be2969",
"assets/assets/images/star.svg": "d33e20c0e94d7d55783f564bc1ac7ba1",
"assets/assets/images/status-up.svg": "725828c21493bceca9ee54ac86915f86",
"assets/assets/images/tabler_edit.svg": "9dd5a85db506ede106828521756b57af",
"assets/assets/images/tabler_logout.svg": "24d5aa5f40884b35fd73c76f0ae6e746",
"assets/assets/images/tabler_tag.svg": "a4f893aa8b3e184e1314d14c320a7087",
"assets/assets/images/tesla.svg": "3b7c34c4a74ed2a5415d26d40df1b84a",
"assets/assets/images/times.svg": "a4b4c3be30a291e86ef13762a0b92471",
"assets/assets/images/trx.png": "471d8718d5d7512e6c29c09dcf867035",
"assets/assets/images/us.svg": "7a0df3a155a8ece343809e77def8bb8b",
"assets/assets/images/usdt.png": "52390098fbdafb61175be0b52b17b0cc",
"assets/assets/images/user.svg": "615c333827da68e1287b9bd735d39320",
"assets/assets/images/Vector.svg": "6ffb5ff60938572f39f07cab803d46b4",
"assets/assets/images/Vector33.svg": "e1afd54c30a15c4e0486c1fef64e4f9a",
"assets/assets/images/Vector99.svg": "a6de2eb11f355d64dbcf018b011c6c5b",
"assets/assets/images/video.svg": "98e26c5573b467c55ae729515cda5dc8",
"assets/assets/images/visa.png": "58ee88797a8434856a975f468fd1d25f",
"assets/assets/images/wallet.svg": "7c260000906be0885beb77fe452757d7",
"assets/assets/images/wallet1.svg": "930947c053bbd7904894bb1e8276995b",
"assets/assets/images/Wooden%2520Hand%2520iPhone%252012%2520Pro.png": "53b0ac87c3ce93e8f23461672c546125",
"assets/assets/instagram.svg": "abfe70361d37471fb39f7967cc33ed16",
"assets/assets/linkedin.svg": "05a86a0c4dfa89a3370294d478045963",
"assets/assets/reliable.jpeg": "eb48b376ea41e1b57b9c259eff15863f",
"assets/assets/review.jpeg": "9e13cb3f689f0665f0ceafc566e25a80",
"assets/assets/review1.jpg": "1a0955a0fe31791203cf9de23eb29343",
"assets/assets/social.jpeg": "df6fb1ac16e92a6d955a42886daddb68",
"assets/assets/telegram.svg": "6b4faf013059247c6d30be90bccef1c0",
"assets/assets/tiktok.svg": "f477449e717be7ef0e58a5d1f34a973a",
"assets/assets/twitter.svg": "69b7e34b5ea981ab6ad9f4b7100406a6",
"assets/assets/twopic.jpeg": "b7eef6af2543577b15d1134871fe5408",
"assets/assets/video1.mp4": "7573c4653f991eb3c9c3a72e718d23cd",
"assets/assets/Whats11.jpg": "6475ca86f3a51330439feb68f046cc82",
"assets/assets/Whats12.jpg": "d1d8db01a66129fe8bf1cc65f6f312a1",
"assets/assets/Whats13.jpg": "a5c8139a92267cd73eb8b555d68897c2",
"assets/assets/Whats14.jpg": "0b140bb6fcdd894037ee720c8a05d478",
"assets/assets/Whats15.jpg": "6b41873fcf62a1e5b4915f74c069b963",
"assets/assets/Whats16.jpg": "79d6f6ee0091b58d5aa181f8ce2b8e5c",
"assets/assets/Whats17.jpg": "1cf9b9068ba3d77df0da4da734d5c23f",
"assets/assets/Whats18.jpg": "7fa9923e7a260c5f611cbe5bb343c1b9",
"assets/assets/Whats21.jpg": "a5693c816072904b3754b037e27fdc94",
"assets/assets/Whats22.jpg": "ea7bcf0b7f5318a2b1c510c874ac90e1",
"assets/assets/Whats23.jpg": "bc44872fea535597354a7f3698375a4e",
"assets/assets/Whats24.jpg": "f5acd006312e8e03a863be389b55bd77",
"assets/assets/Whats25.jpg": "c3daa9803507833ee9d0d70414d0f037",
"assets/assets/Whats26.jpg": "037d6253ec2e3b654016bc2dea9644b1",
"assets/assets/Whats31.png": "40e5ef6a5952d1f0dcc5100315363ea4",
"assets/assets/whatsapp.svg": "c1484b6850a8b2ecb7a9f9263618bc9c",
"assets/assets/youtube.svg": "cf004e9e6b4d8302083a4d3ece27f173",
"assets/FontManifest.json": "b3ffadabea0692e0217bab3d4e523b42",
"assets/fonts/MaterialIcons-Regular.otf": "0f6634399afbfbb5d4c4b28fc0513619",
"assets/NOTICES": "686a9766fff290cda110b8881727b6ea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/nb_utils/assets/icons/ic_beautify.png": "a680304f89d7cf2de6ebaabcb05e6947",
"assets/packages/nb_utils/assets/lottie/typing.json": "e5cad2457b51962714dfde13e0931a9d",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "4fe1928e582fd2e3316275954fc92e86",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5a2da8d027ff63ed803bf1477a41b753",
"/": "5a2da8d027ff63ed803bf1477a41b753",
"main.dart.js": "0c9b62fad01f3bafdea9f1c77677da1b",
"manifest.json": "9f8e35f49c3aa829a31c69740c21c1c4",
"version.json": "2525450cf6395a617f181cb200f7e074"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
