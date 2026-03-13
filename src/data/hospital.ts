import {
  Stethoscope,
  Baby,
  Heart,
  Sparkles,
  Microscope,
  Syringe,
  Phone,
  Clock,
  MapPin,
  Mail,
  HeartPulse,
  Layers,
  HandHeart,
  type LucideIcon,
} from "lucide-react"

export interface Department {
  id: string
  title: string
  description: string
  icon: LucideIcon
  image?: string
}

export interface ContactInfo {
  phone: string
  phone2?: string
  emergency: string
  email?: string
  address: string
  workingHours: {
    weekdays: string
    weekend: string
    emergency: string
  }
  location: {
    lat: number
    lng: number
  }
}

export const hospitalInfo = {
  name: "Etik Hastanesi",
  tagline: "Lefkoşa'nın İlk Özel Hastanesi",
  description:
    "2000 yılından bu yana Lefkoşa'da sağlık hizmeti veren Etik Hastanesi, modern tıbbi teknoloji ve uzman kadrosuyla 7/24 yanınızda.",
  foundedYear: 2000,
  logo: "/logo.svg",
}

export const contactInfo: ContactInfo = {
  phone: "+90 392 223 4694",
  phone2: "+90 533 885 9191",
  emergency: "1141",
  email: "info@etikhastanesi.com",
  address: "Dr. Remzi Gönenç Sokak No:5, 99010 Ortaköy, Lefkoşa, Kuzey Kıbrıs",
  workingHours: {
    weekdays: "08:00 - 20:00",
    weekend: "09:00 - 18:00",
    emergency: "7/24 Acil Servis",
  },
  location: {
    lat: 35.20128,
    lng: 33.329807,
  },
}

export const departments: Department[] = [
  {
    id: "dahiliye",
    title: "Dahiliye",
    description:
      "Yetişkinlerde genel sağlık sorunlarının tanı ve tedavisi için iç hastalıkları uzmanlarımız hizmetinizde.",
    icon: Stethoscope,
  },
  {
    id: "pediatri",
    title: "Çocuk Sağlığı ve Hastalıkları",
    description:
      "Bebeklerden ergenlere kadar tüm çocuklarımızın sağlık takibi ve tedavisi için uzman pediatristlerimiz.",
    icon: Baby,
  },
  {
    id: "kadin-dogum",
    title: "Kadın Hastalıkları ve Doğum",
    description:
      "Kadın sağlığının her döneminde, gebelik takibinden jinekolojik muayenelere kadar kapsamlı hizmet.",
    icon: Heart,
  },
  {
    id: "dermatoloji",
    title: "Dermatoloji",
    description:
      "Cilt, saç, tırnak hastalıkları ve estetik dermatoloji uygulamaları için uzman hekimlerimiz.",
    icon: Sparkles,
  },
  {
    id: "laboratuvar",
    title: "Tıbbi Laboratuvar",
    description:
      "En güncel cihazlarla donatılmış laboratuvarımızda hızlı ve güvenilir test sonuçları.",
    icon: Microscope,
  },
  {
    id: "lazer-epilasyon",
    title: "Lazer Epilasyon",
    description:
      "Son teknoloji lazer cihazlarımızla güvenli ve etkili kalıcı tüy alma hizmeti.",
    icon: Syringe,
  },
]

export const features = [
  {
    title: "7/24 Acil Servis",
    description: "Acil sağlık ihtiyaçlarınız için günün her saati hizmetinizdeyiz.",
    icon: Clock,
  },
  {
    title: "Uzman Kadro",
    description: "Alanında deneyimli doktorlar ve sağlık profesyonelleri.",
    icon: Stethoscope,
  },
  {
    title: "Modern Teknoloji",
    description: "En son tıbbi cihazlar ve tedavi yöntemleriyle hizmet.",
    icon: Microscope,
  },
  {
    title: "Kolay Ulaşım",
    description: "Lefkoşa merkezinde, kolay ulaşılabilir konumda.",
    icon: MapPin,
  },
]

export const stats = [
  { value: "24+", label: "Yıllık Deneyim" },
  { value: "50K+", label: "Mutlu Hasta" },
  { value: "20+", label: "Uzman Doktor" },
  { value: "7/24", label: "Acil Servis" },
]

export const navLinks = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/tibbi-birimler" },
  { label: "Doktorlarımız", href: "/doktorlarimiz" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
]

export { Phone, Clock, MapPin, Mail }

export const medicalUnitCategories = [
  {
    id: "cerrahi",
    title: "Cerrahi Birimler",
    description: "Cerrahi müdahale ve ameliyat gerektiren branşlarımız.",
    longDescription: "Uzun açıklama (detay sayfasında)",
    image: "/images/branches/genel-cerrahi.jpg",
    bullets: [
    "Tanı ve tedavi süreçleri",
    "Ameliyat öncesi değerlendirme",
    "Takip ve kontrol",
  ],
    icon: Stethoscope,
   items: [
  {
    id: "estetik-plastik-rekonstruktif-cerrahi",
    title: "Estetik Plastik ve Rekonstrüktif Cerrahi",
    description: "Estetik ve Rekonstrüktif Cerrahi, doğuştan gelen veya sonradan oluşan doku ve organ bozukluklarının düzeltilmesi ile estetik görünümün iyileştirilmesini amaçlayan cerrahi işlemleri kapsayan bir tıp dalıdır.",
    longDescription: `Plastik Cerrahi, tıbbın çeşitli alanlarına yayılan geniş bir disiplindir ve estetik cerrahiye ek olarak rekonstrüktif cerrahi, el cerrahisi, kraniyofasiyal cerrahi, mikro cerrahi ve yanık tedavisi gibi birçok alt dalı içerir. Rekonstrüktif cerrahi, vücutta deri, deri altı dokuları ve kemikleri etkileyen her türlü doku kaybının onarılmasını içerir. Örneğin, yapışık parmakların ayrılması, travmatik yanıkların tedavisi, kesiklerin ve uzuv kopmalarının onarılması gibi durumlar bu alana girer.


Estetik cerrahi ise vücut görünümünün iyileştirilmesi ve güzelleştirilmesi için yapılan ameliyatları içerir. Temel amaç, tıbbi bir problem yerine güzellik ve estetik kaygılardır. Ancak, bazen estetik cerrahi, tıbbi problemleri de içerebilir. Örneğin, dev boyutlara ulaşan memelerin cerrahi olarak düzeltilmesi, aşırı şişman bir gövdenin yeniden şekillendirilmesi gibi durumlar hem tıbbi hem de estetik problemleri içerir.


Plastik Cerrahi, rekonstrüktif ve estetik cerrahinin yanı sıra genel vücutta meydana gelen doku bozuklukları, ameliyat izleri, travmalara bağlı sarkmalar gibi patolojik durumlarla da ilgilenir. Etik Hastanesi olarak, plastik cerrahi uzmanlarımız, hastaların taleplerini ve ihtiyaçlarını dikkate alarak, hem estetik kaygılarını gidermek hem de sağlık sorunlarını çözmek için en uygun tedavi planlarını sunmaktadır. Her hasta için kişiselleştirilmiş ve güvenli bir yaklaşımı benimseyerek, hastalarımızın sağlıklı bir yaşam ve memnuniyeti için çalışıyoruz.`,

image: "/images/...",
  },

  {
    id: "genel-cerrahi",
    title: "Genel Cerrahi",
    description: "Genel cerrahi; karın, meme, cilt, yumuşak dokular ve fıtık gibi birçok alanda cerrahi müdahaleleri kapsayan geniş bir uzmanlık alanıdır. Acil ve planlı operasyonların gerçekleştirilmesini içerir.",
    longDescription:` Etik Hastanesi, Genel Cerrahi alanında uzmanlaşmış doktor ve deneyimli tıbbi personeliyle, ameliyat ve ameliyat sonrası bakım süreçlerinde üst düzey kalite standartlarında hizmet sunmaktadır. Türkiye'nin çeşitli illerinde bulunan tam teşekküllü hastane, ameliyathane ve destekleyici tıbbi bakım birimleriyle, ameliyat süreçlerini en sağlıklı şekilde yönetmektedir.


Farklı cerrahi konularda uzmanlaşmış doktor kadrosu sayesinde, Genel Cerrahi alanına giren tüm hastalıkların etkili bir şekilde tedavi edilmesi ve iyileştirilmesi hedeflenmektedir. Etik Hastanesi, cerrahi müdahalelerde en son teknolojiyi kullanarak, hastaların güvenliğini ve konforunu sağlamayı amaçlamaktadır.


Ameliyat öncesi, sırası ve sonrasında hastaların ihtiyaç duyduğu tüm tıbbi ve psikolojik destek, Etik Hastanesi'nin uzman kadrosu tarafından titizlikle sağlanmaktadır. Hastaların sağlığı ve iyiliği her zaman önceliğimizdir.


Etik Hastanesi olarak, Genel Cerrahi alanında uzmanlaşmış ekiplerimizle, hastalarımıza en iyi tedaviyi sunmak ve onların sağlıklı bir yaşam sürmelerine katkıda bulunmak için çaba gösteriyoruz. Her hasta için kişiselleştirilmiş ve güvenli bir tedavi deneyimi sağlamak için çalışıyoruz.`,
    image: "/images/...",
  },

  {
    id: "goz-hastaliklari",
    title: "Göz Hastalıkları",
    description: "Göz hastalıkları; görme bozuklukları ve göz sağlığını etkileyen hastalıkların tanı ve tedavisini kapsar. Miyopi, hipermetropi, astigmatizma, katarakt ve glokom gibi rahatsızlıkları içerir.",
    longDescription: `  Etik Hastanesi, göz hastalıkları konusunda uzmanlaşmış doktorları ve son teknolojiye sahip ekipmanlarıyla hizmet vermektedir. Göz hastalıkları, çeşitli çevresel veya genetik faktörlere bağlı olarak ortaya çıkabilen ve görme yeteneğini etkileyen fiziksel rahatsızlıklardır. Göz kapaklarında, göz zarında, gözyaşı kanallarında, göz merceğinde veya gözü çevreleyen sinir dokularında meydana gelen her türlü hastalık göz hastalıkları olarak kabul edilir.


Etik Hastanesi, göz hastalıklarının teşhis ve tedavisi konusunda geniş bir yelpazede hizmet sunmaktadır. Görme bozukluklarından, katarakt, glokom, retinal hastalıklar gibi yaygın göz rahatsızlıklarına kadar, her türlü göz sorununun teşhisinde ve tedavisinde uzmanlaşmış bir ekipten oluşmaktadır.


Hastanemizde, göz hastalıklarının teşhisinde modern görüntüleme ve test yöntemleri kullanılmaktadır. Ayrıca, göz cerrahisi ve lazer tedavisi gibi cerrahi müdahalelerde de en son teknolojiye sahip ekipmanlar kullanılmaktadır.


Etik Hastanesi, hastaların sağlığı ve konforu için en üst düzeyde hizmet sunmayı amaçlamaktadır. Her hasta için kişiselleştirilmiş bir tedavi planı oluşturarak, hastaların sağlıklı bir göz yaşamına kavuşmalarına yardımcı olmaktadır. Göz sağlığınızı korumak ve görme problemleriyle mücadele etmek için Etik Hastanesi'ne güvenebilirsiniz.` ,
    image: "/images/...",
  },

  {
    id: "gogus-hastaliklari",
    title: "Göğüs Hastalıkları",
    description: "Göğüs hastalıkları; solunum sistemi ile ilgili hastalıkların tanı, tedavi ve takibini kapsayan bir tıp dalıdır. Astım, KOAH, zatürre ve akciğer hastalıklarının değerlendirilmesini içerir.",
    longDescription: ` Etik Hastanesi Göğüs Hastalıkları Bölümü, akciğer ve solunum sistemiyle ilgili hastalıkların tanı ve tedavisi üzerine uzmanlaşmış bir ana bilim dalıdır. Astım, alerjik hastalıklar, bronşit, kronik obstrüktif akciğer hastalığı, zatürre, tüberküloz, akciğer embolisi, kronik öksürük, akciğer kanseri gibi çeşitli rahatsızlıklarla ilgilenir.


Bölümümüzde görev yapan uzman hekimler, multidisipliner bir yaklaşım benimseyerek hastalıkların tanı ve tedavisini gerçekleştirirler. Bu süreçte gerekli olan ileri radyolojik görüntüleme tetkikleri, laboratuvar testleri, solunum fonksiyon laboratuvarında yapılan vital kapasite testi, difüzyon testi gibi çeşitli teknikler kullanılır.


Göğüs hastalıkları bölümü hekimleri, sadece hastalıkların tanı ve tedavisinde değil, aynı zamanda sigara bağımlılığı, sigaraya bağlı hastalıklar ve sigara bırakma yöntemleri konusunda da hastalarına yardımcı olurlar.


Etik Hastanesi Göğüs Hastalıkları Bölümü uzmanları, akciğer hastalıklarına ait tanı, tedavi ve takibini yapmak üzere uzun bir eğitim sürecinden geçerler. Bu süreç, 6 yıllık tıp fakültesi eğitiminin ardından 4 yıl süren göğüs hastalıkları bölümü için uzmanlık eğitimini içerir.


Hastalarımızın sağlığı ve konforu her zaman önceliğimizdir. Etik Hastanesi Göğüs Hastalıkları Bölümü olarak, hastalarımıza en iyi tedaviyi sunmak ve onların sağlıklı bir yaşam sürmelerine katkıda bulunmak için çaba gösteriyoruz. Her hasta için kişiselleştirilmiş bir tedavi yaklaşımı benimseyerek, hastalarımızın sağlık sorunlarını en etkili şekilde çözmeyi hedefliyoruz.` ,

image: "/images/...",
  },
{
  id: "ortopedi-ve-travmatoloji",
  title: "Ortopedi ve Travmatoloji",
  description:
    "Ortopedi ve Travmatoloji bölümü; kemik, eklem, kas, bağ ve tendon hastalıklarının tanı ve tedavisi ile ilgilenir.",

  longDescription:
    "Ortopedi ve Travmatoloji bölümü; kemikler, eklemler, kaslar, bağlar ve tendonlar gibi hareket sistemini oluşturan yapıların hastalıklarının tanı ve tedavisi ile ilgilenir. Kırıklar, çıkıklar, spor yaralanmaları, eklem kireçlenmeleri, menisküs ve bağ yaralanmaları gibi birçok ortopedik problem bu bölüm kapsamında değerlendirilir. Etik Hastanesi Ortopedi ve Travmatoloji birimi, modern tanı yöntemleri ve güncel tedavi yaklaşımları ile hastalarına kapsamlı sağlık hizmeti sunar. Uzman doktor kadromuz, hastaların yaşam kalitesini artırmayı hedefleyen kişiye özel tedavi planları oluşturarak hareket kabiliyetinin yeniden kazanılmasına yardımcı olur.",

  image: "/images/medical-units/ortopedi.jpg",
},
  {
    id: "kadin-hastaliklari-dogum",
    title: "Kadın Hastalıkları ve Doğum",
    description: "Kadın hastalıkları ve doğum; kadın üreme sistemi ile ilgili hastalıkların tanı ve tedavisini kapsar. Gebelik takibi, doğum süreçleri ve jinekolojik hastalıkların değerlendirilmesini içerir.",
    longDescription:  `Etik Hastanesi Kadın Hastalıkları ve Doğum Bölümü, kadın sağlığıyla ilgili kapsamlı hizmetler sunan, modern tıbbın tüm imkanlarından faydalanan bir birimdir. Kadın Hastalıkları ve Doğum uzmanlık alanı, "Jinekoloji ve Obstetrik" branşını kapsar ve kadın üreme organlarıyla ilgili hastalıkların teşhis ve tedavisini, aynı zamanda gebelik takibi ve doğum işlemlerini içerir.


Jinekoloji kısmı, rahim, rahim ağzı, vajina, vulva, tüpler gibi kadın üreme organlarına ait hastalıkların teşhis ve tedavisini gerçekleştirirken; Obstetrik kısmı, gebelik takibi ve gebelikle ilgili sorunların çözümüne odaklanır. Ayrıca, kadın kısırlığı probleminin teşhisi, rahim filmi çekimi, yumurta takibi, aşılama ve tüp bebek yöntemleri gibi üreme sağlığıyla ilgili tedaviler de bu bölümün uzmanlık alanına girer.


Kadın Hastalıkları ve Doğum bölümü, pediatrik - ergen jinekolojisi, jinekolojik kanserler, ürojinekoloji, üreme sağlığı, yüksek riskli gebeliklerin takibi, cinsel fonksiyon bozuklukları, menopoz, jinekolojik operasyonlar gibi pek çok alanda hizmet verir. Uzman kadromuz, her hastanın ihtiyaçlarına özel olarak kişiselleştirilmiş bir tedavi planı oluşturarak, hastalarımıza en etkili ve güvenilir sağlık hizmetini sunmayı amaçlar.


Etik Hastanesi Kadın Hastalıkları ve Doğum Bölümü olarak, kadınların sağlıklı bir yaşam sürmeleri ve doğum süreçlerini güvenle geçirmeleri için en kaliteli hizmeti sunmaktan gurur duyuyoruz. Her aşamada hastalarımızın yanında olup, onların sağlık ve mutluluğunu en üst düzeyde tutmak için çalışıyoruz. `,
    image: "/images/...",
  },

  {
    id: "kardiyoloji",
    title: "Kardiyoloji",
    description: "Kardiyoloji; kalp ve damar sistemi ile ilgili hastalıkların tanı, tedavi ve takibini kapsayan bir uzmanlık dalıdır. Kalp ritim bozuklukları ve damar hastalıklarının değerlendirilmesini içerir.",
    longDescription:
` Etik Hastanesi Kardiyoloji Bölümü, kalp sağlığına odaklanmış, hayati öneme sahip bir birimdir. Kalp, vücudun en önemli organlarından biridir ve sürekli olarak kanı dolaştırarak oksijen ve besin maddelerini vücut dokularına taşır. Kalbin doğru şekilde çalışması, genel sağlık ve yaşam kalitesi için hayati önem taşır.


Kardiyoloji, tıp alanındaki kilit bilim dallarından biridir ve kalp ile dolaşım sistemiyle ilgilenir. Kardiyologlar, kalp hastalıklarının tanı ve tedavisi konusunda uzmanlaşmış hekimlerdir. Etik Hastanesi Kardiyoloji Bölümü, kalp hastalıklarının teşhisi, tedavisi ve takibi konularında geniş bir hizmet yelpazesi sunmaktadır.


Kardiyoloji bölümümüzde, kalp sağlığıyla ilgili çeşitli rahatsızlıkların teşhisi için modern teşhis yöntemleri kullanılmaktadır. Ekokardiyografi, stres testleri, elektrokardiyografi (EKG), kalp ritim monitörizasyonu gibi ileri teknolojiye dayalı tanı araçlarıyla hastaların kalp sağlığı detaylı bir şekilde değerlendirilir.


Etik Hastanesi Kardiyoloji Bölümü, kalp rahatsızlıklarının teşhis ve tedavisinde uzmanlaşmış bir ekibe sahiptir. Kalp krizi, kalp ritim bozuklukları, kalp yetmezliği, damar tıkanıklığı gibi çeşitli kalp hastalıklarının tedavisi konusunda deneyimli hekimlerimiz, hastalarımıza en etkili ve güvenilir tedavi seçeneklerini sunmaktadır.


Hastalarımızın sağlığı ve iyiliği her zaman önceliğimizdir. Etik Hastanesi Kardiyoloji Bölümü olarak, kalp sağlığını korumak ve kalp hastalıklarını etkili bir şekilde tedavi etmek için en ileri teknolojiye ve en nitelikli uzmanlara sahip olduğumuzdan emin olabilirsiniz. Her hasta için kişiselleştirilmiş bir tedavi yaklaşımıyla, kalp sağlığınızı güvende tutmak için buradayız.`,

    image: "/images/...",
  },

  {
    id: "noroloji",
    title: "Nöroloji",
    description: "Nöroloji; beyin, omurilik ve sinir sistemi hastalıklarının tanı ve tedavisi ile ilgilenen bir tıp dalıdır. İnme, epilepsi, Parkinson ve benzeri nörolojik hastalıkların değerlendirilmesini içerir.",
    longDescription: ` Etik Hastanesi Nöroloji Bölümü, sinir sistemi fizyolojisi ve hastalıklarıyla ilgilenen bir tıbbi birimdir. Sinir sistemi, beyin, spinal kord (omurilik) ve periferik sinir sisteminden oluşur. Bu üç bölgede gelişen ve cerrahi müdahale gerektirmeyen hastalıkların tanı ve tedavisi Nöroloji Bölümü tarafından gerçekleştirilir.


Nöroloji, erişkin ve çocuk nörolojisi olarak iki ana branşa ayrılır. Her iki branşta da uzmanlaşmış hekimlerimiz, hastalarımıza kapsamlı ve kişiselleştirilmiş tedavi sağlamak için çalışmaktadır. Nöroloji bölümümüzde, poliklinik ve yatarak tedavi hizmetlerinin yanı sıra yoğun bakım gerektiren hastalıkların takibinde de yoğun bakım hizmeti sunulmaktadır.


Hastalarımızın sağlığına odaklanarak, nörolojik rahatsızlıkların teşhis ve tedavisinde en son teknolojik imkanları kullanmaktayız. Uzman kadromuz, deneyimli ve alanlarında uzmanlaşmış hekimlerden oluşmaktadır ve hastalarımıza etkili ve güvenilir tedavi seçenekleri sunmaktadır.


Etik Hastanesi Nöroloji Bölümü olarak, hastalarımızın sağlığını korumak ve yaşam kalitelerini artırmak için en iyi hizmeti sunmaya kararlıyız. Her hasta için özel olarak tasarlanmış tedavi planlarıyla, nörolojik sağlık sorunlarıyla mücadele etmekteyiz. Hastalarımızın güvenliği ve iyiliği her zaman önceliğimizdir.` ,

image: "/images/...",
  },



  {
    id: "uroloji",
    title: "Üroloji",
    description: "Üroloji; idrar yolları ve erkek üreme sistemi hastalıklarının tanı ve tedavisi ile ilgilenir. Böbrek, mesane, prostat ve idrar yolu hastalıklarının değerlendirilmesini kapsar.",
    longDescription: `  Etik Hastanesi, idrar yolları ve üriner sistemle ilgilenen üroloji alanında uzmanlaşmış doktorlara sahip bir tıbbi merkezdir. Ürologlar, kadınlarda, erkeklerde ve çocuklarda görülen ürolojik sorunların teşhis, tedavi ve takibinde uzmanlaşmıştır.


Üroloji, idrar yolu enfeksiyonları, böbrek taşları, idrar kaçırma, prostat sorunları, üreme organlarının sağlığı gibi çeşitli konularla ilgilenir. Etik Hastanesi Üroloji Bölümü, hastaların bu tür rahatsızlıklarını en etkili ve güvenilir şekilde yönetmek için modern tıbbi teknoloji ve uzmanlıkla donatılmıştır.


Ürolojik sorunlar genellikle cinsiyet veya yaş farkı gözetmeksizin herkesi etkileyebilir. Etik Hastanesi, her hasta için özel bir tedavi yaklaşımı benimseyerek, hastaların sağlığına en uygun ve kişiselleştirilmiş bakımı sunmayı amaçlar.


Uzman ürologlarımız, hastaların sağlık sorunlarını anlamak ve en uygun tedavi seçeneklerini sunmak için geniş bir tecrübeye ve uzmanlığa sahiptir. Hastalarımızın sağlığına odaklanarak, ürolojik sorunların etkili bir şekilde yönetilmesine ve hastalarımızın yaşam kalitesinin artırılmasına yardımcı olmak için çaba gösteriyoruz. Etik Hastanesi olarak, ürolojik sağlık sorunlarıyla mücadele etmek için hastalarımıza profesyonel ve güvenilir bir ortam sağlamaktan gurur duyuyoruz. ` ,

image: "/images/...",
  },
]
  },
  {
    id: "dahili",
    title: "Dahili Birimler",
    description: "Tanı, takip ve tedavi odaklı dahili branşlarımız.",
    longDescription: "Uzun açıklama (detay sayfasında)",
    image: "/images/branches/genel-cerrahi.jpg",
    bullets: [
    "Tanı ve tedavi süreçleri",
    "Ameliyat öncesi değerlendirme",
    "Takip ve kontrol",
  ],
    icon: HeartPulse,
    items: [
  {
    id: "dahiliye",
    title: "Dahiliye",
    description: "Dahiliye; yetişkinlerde görülen iç hastalıkların tanı, tedavi ve takibini kapsayan temel bir tıp dalıdır. İç organ sistemlerinin değerlendirilmesi ve genel sağlık yönetimini içerir.",
    longDescription:  `  Hastalıkların erken teşhis ve tedavi yöntemlerinin gelişmesi, tıbbın önemli bir ilerleme kaydetmesine sebep olmuştur. Yeni teknolojilerin kullanımı sayesinde birçok hastalık ilerlemeden önce tespit edilebilir hale gelmiştir. Laboratuvar tetkikleri, ileri görüntüleme teknikleri ve diğer modern teknolojiler, hastalıkların teşhisini ve tedavisini kolaylaştırmaktadır.


İç hastalıkları bölümü, bu teknolojilerin kullanıldığı ve hastalıkların teşhis ve tedavisinde önemli bir rol üstlenen birimlerden biridir. Etik Hastanesi olarak, iç hastalıkları bölümümüz, detaylı araştırmalar ve modern tıbbın sunduğu imkanlarla hastalıkların erken evrede teşhis edilmesini sağlamaktadır. Bu sayede hastaların tedavi süreci daha etkili ve başarılı bir şekilde yürütülmektedir.


İç hastalıkları bölümü, 15 yaş üzeri hastalarda iç organlara ait çeşitli rahatsızlıkların teşhis ve tedavisini üstlenmektedir. Ayrıca, hastaların sağlıklarını korumak ve olası rahatsızlıklardan korunmaları için bilgilendirme yapmaktadır. Hipertansiyon, solunum yolu hastalıkları, şeker hastalığı, tiroid problemleri, böbrek ve bağırsak hastalıkları gibi geniş bir yelpazede hizmet vermektedir.


Etik Hastanesi iç hastalıkları bölümü, hastaların sağlık sorunlarına karşı duyarlı bir şekilde yaklaşarak, doğru teşhis ve etkili tedavi planlarıyla hastaların sağlıklı bir yaşam sürmelerine yardımcı olmaktadır. Hastaların ihtiyaçlarına özel olarak tasarlanmış tedavi yöntemleri ile her zaman yanlarında olduğumuzu belirtmek isteriz. Sağlıklı bir gelecek için Etik Hastanesi iç hastalıkları bölümü her zaman hizmetinizdedir.  ` ,

image: "/images/...",
  },

  {
    id: "deri-zuhrevi-hastaliklar",
    title: "Deri ve Zührevi Hastalıklar",
    description: "Dermatoloji; cilt, saç, tırnak ve mukozaları etkileyen hastalıkların tanı ve tedavisi ile ilgilenir. Ayrıca cinsel yolla bulaşan hastalıkların değerlendirilmesini de kapsar.",
    longDescription: `  Deri ve Zührevi Hastalıkları (Dermatoloji), cilt, saç, tırnak, mukozalar ve cinsel yolla bulaşan hastalıkların tanı ve tedavisi ile ilgilenen önemli bir tıp dalıdır. Dermatoloji uzmanları, geniş bir yelpazedeki deri problemleriyle ilgilenir ve hastaların sağlıklı bir cilt yapısına sahip olmalarını sağlamak için çaba gösterirler.

Etik Hastanesi Dermatoloji Bölümü olarak, cilt sağlığınızı korumak ve deri ile ilgili her türlü sorunu çözmek için buradayız. Dermatoloji uzmanlarımız, modern teşhis ve tedavi yöntemlerini kullanarak hastaların sağlıklı bir cilde sahip olmalarını desteklemektedirler.


Dermatoloji uzmanları, hastalıkların teşhisi için cilt muayenesi, mikroskopik inceleme, biyopsi ve laboratuvar testleri gibi çeşitli yöntemleri kullanırlar. Cilt sorunlarına yönelik tedavi planları genellikle ilaçlar, topikal kremler, lazer terapileri veya cerrahi müdahaleler gibi yöntemleri içerebilir.


Cilt sağlığı ve görünümü, genel sağlık ve yaşam kalitesi üzerinde önemli bir etkiye sahiptir. Etik Hastanesi Dermatoloji Bölümü olarak, her hasta için kişiselleştirilmiş tedavi yaklaşımlarıyla en iyi sonuçları elde etmek için çaba gösteriyoruz. Sağlıklı bir cilt ve yaşam için Etik Hastanesi Dermatoloji Bölümü olarak size hizmet etmekten mutluluk duyuyoruz. ` ,

image: "/images/...",
  },

  {
    id: "kulak-burun-bogaz",
    title: "Kulak Burun Boğaz",
    description: "Kulak burun boğaz hastalıkları; kulak, burun ve boğaz ile ilgili sağlık sorunlarının tanı ve tedavisini kapsar. İşitme kaybı, sinüzit ve boğaz hastalıklarının değerlendirilmesini içerir.",
    longDescription:`  Etik Hastanesi Kulak Burun Boğaz (KBB) Hastalıkları Bölümü, alanında deneyimli uzman hekimler tarafından yönetilmekte olup, son teknolojiye sahip cihazlarla donatılmıştır. Burada her türlü KBB hastalığının teşhis ve tedavisi başarıyla gerçekleştirilmektedir. Hastanemizdeki ileri teknolojik donanım sayesinde, kulak, burun ve boğaz bölgesindeki ameliyatlar endoskopik, mikroskopik veya açık cerrahi yöntemlerle en güncel tekniklerle gerçekleştirilmektedir.


Her yaş grubundan hastanın tanı ve tedavi süreçleri, gerektiğinde diğer uzmanlık dallarındaki deneyimli hekimlerle işbirliği içinde yürütülmektedir. Bu multidisipliner yaklaşım, hastalarımıza en kapsamlı ve etkili tedavi planlarını sunma imkanı sağlar.


Etik Hastanesi KBB Bölümü, kulak, burun ve boğazla ilgili geniş bir yelpazedeki hastalıkların tanı ve tedavisinde uzmanlaşmıştır. Kulak enfeksiyonları, işitme kaybı, burun tıkanıklığı, sinüzit, boğaz ağrısı, ses kısıklığı gibi yaygın rahatsızlıkların yanı sıra daha kompleks durumlar da titizlikle ele alınmaktadır.


Hastalarımızın sağlığı ve refahı her zaman önceliğimizdir. Etik Hastanesi KBB Bölümü olarak, uzman ekibimiz ve son teknoloji ekipmanlarımızla hastalarımıza en iyi tedaviyi sunmaktan gurur duyuyoruz. Her hasta için özel olarak kişiselleştirilmiş bir tedavi planı oluşturarak, onların sağlıklı bir yaşam sürmelerine yardımcı olmak için çaba gösteriyoruz.` ,

image: "/images/...",
  },

  {
    id: "cocuk-sagligi-hastaliklari",
    title: "Çocuk Sağlığı ve Hastalıkları",
     description: "Çocuk sağlığı ve hastalıkları; bebeklikten ergenliğe kadar çocukların sağlık takibi ve hastalıklarının tanı ve tedavisini kapsayan bir uzmanlık alanıdır.",
    longDescription:  `Etik Hastanesi Çocuk Sağlığı ve Hastalıkları Bölümü, bebeklikten ergenliğe kadar olan dönemdeki çocukların sağlık sorunlarının önlenmesi, tanı ve tedavisi üzerine uzmanlaşmış bir ana bilim dalıdır. Enfeksiyon hastalıkları, alerjik reaksiyonlar, büyüme ve gelişme sorunları, beslenme bozuklukları ve aşı takibi gibi çeşitli sağlık konularını kapsar.


Bu bölümde görev yapan uzman pediyatristler, çocukların fiziksel ve psikolojik gelişimlerini destekleyici, koruyucu sağlık hizmetleri sunar. Multidisipliner bir yaklaşımla, gelişimsel değerlendirme, düzenli sağlık kontrolleri ve aşı programları gibi önleyici hizmetler sağlanır.


Pediyatri bölümü, çocukların sağlıklı büyüme ve gelişmelerini desteklemek amacıyla beslenme danışmanlığı, ergen sağlığı, davranışsal sorunlar ve eğitim zorlukları gibi alanlarda da yardımcı olur. Çocukların ve ailelerinin ihtiyaçları doğrultusunda kişiselleştirilmiş tedavi planları geliştirilir.


Etik Hastanesi Çocuk Sağlığı ve Hastalıkları Bölümü uzmanları, çocukluk çağı hastalıklarının yanı sıra sağlıklı büyüme ve gelişme süreçlerini desteklemek için kapsamlı bir eğitimden geçerler. Tıp fakültesi eğitiminin ardından pediyatri alanında uzmanlık eğitimi alırlar.


Bölüm olarak, çocukların sağlıklı ve mutlu bireyler olarak büyümelerini sağlamak için çaba sarf ediyoruz. Çocuklarımızın her biri özeldir ve onlara en iyi sağlık hizmetini sunmak, onların ve ailelerinin yaşam kalitesini artırmak temel önceliğimizdir. Her çocuğun gelişimine ve sağlığına katkıda bulunarak, sağlıklı bir toplumun temellerini atmaya devam ediyoruz.`,

    image: "/images/...",
  },
]
  },

  {
    id: "diger",
    title: "Diğer Birimler",
    description: "Farklı uzmanlık alanlarında destek birimlerimiz.",
    longDescription: "Uzun açıklama (detay sayfasında)",
    image: "/images/branches/genel-cerrahi.jpg",
    bullets: [
    "Tanı ve tedavi süreçleri",
    "Ameliyat öncesi değerlendirme",
    "Takip ve kontrol",
  ],
    icon: Layers,
   items: [
  {
    id: "agiz-dis-sagligi",
    title: "Ağız ve Diş Sağlığı",
    description: "Ağız ve diş sağlığı; diş, diş eti ve ağız yapısını etkileyen hastalıkların tanı ve tedavisini kapsar. Sağlıklı bir ağız yapısının korunması ve estetik gülüşün desteklenmesini amaçlar.",
    longDescription:
` Ağız ve diş sağlığı, genel sağlığımızın önemli bir parçasıdır ve ihmal edilmemesi gereken bir konudur. Etik Hastanesi olarak, ağız ve diş sağlığınızı korumak ve tedavi etmek için en iyisini sunmak amacıyla çaba gösteriyoruz.


Ağız ve diş hastalıkları, sadece ağız içinde değil, genel sağlık üzerinde de ciddi etkilere sahip olabilir. Örneğin, diş çürükleri ve diş eti hastalıkları gibi durumlar, ağız içi enfeksiyonlara yol açabilir ve bu enfeksiyonlar yayılarak vücut genelinde sağlık sorunlarına neden olabilir. Ayrıca, kötü ağız hijyeni, kalp hastalıkları, diyabet ve solunum yolu enfeksiyonları gibi ciddi sağlık sorunlarının riskini artırabilir.


Etik Hastanesi Ağız ve Diş Sağlığı Bölümleri, uzman diş hekimleri ve deneyimli personeli ile her türlü ağız ve diş sorununu modern teknoloji ve hasta odaklı bir yaklaşımla tedavi etmektedir. Rutin diş temizliği ve kontrollerden, diş beyazlatma ve estetik uygulamalara kadar geniş bir hizmet yelpazesi sunmaktayız.


Hastalarımızın sağlığı ve memnuniyeti bizim için ön plandadır. Bu nedenle, her hasta için kişiye özel tedavi planları oluşturarak, en etkili ve güvenilir tedavi yöntemlerini sunmaya özen gösteriyoruz. Ağız ve diş sağlığınızı korumak ve sağlıklı bir gülümsemeyle yaşamınızı sürdürmenize yardımcı olmak için Etik Hastanesi olarak buradayız. Size en iyi hizmeti sunabilmek için sabırsızlıkla bekliyoruz.`,

image: "/images/...",
  },

   {
    id: "radyoloji",
    title: "Radyoloji",
    description: "Radyoloji; hastalıkların teşhis edilmesinde kullanılan görüntüleme yöntemlerini kapsayan bir tıp dalıdır. X-ray, ultrason, MR ve bilgisayarlı tomografi gibi teknolojilerle tanı sürecini destekler.",
    longDescription:  `  Etik Hastanesi Radyoloji Bölümleri, hastalıkların teşhisinde kritik bir rol oynayan ve vücudun iç yapısını görüntülemek için kullanılan teknolojik yöntemlerin uzmanlık alanıdır. Radyolojik tetkikler, hastalıkların doğru teşhis edilmesi ve etkili bir tedavi sürecinin yürütülmesinde hayati öneme sahiptir. Gelişen teknolojiyle birlikte, farklı görüntüleme teknikleri kullanılarak vücut sistemleri detaylı bir şekilde incelenebilmekte ve bu da hastalıklarla mücadelede başarılı sonuçların elde edilmesine olanak tanımaktadır.


Etik Hastanesi Radyoloji Bölümleri, dünya standartlarında hizmet sunmak üzere ileri teknoloji ürünü cihazlar ve deneyimli uzman kadrosuyla donatılmıştır. Tamamen dijital teknolojiye dayalı sistemlerle elde edilen görüntüler, dijital ortamda arşivlenerek kolayca erişilebilir hale getirilmektedir. Bölümlerimizde düşük doz ve yüksek çekim kalitesine sahip cihazlar kullanılarak en hassas görüntüler elde edilmekte ve hastaların konforu ön planda tutulmaktadır.


Ayrıca, çocuk dostu doz uygulamalarıyla bebek ve çocuk hastaların görüntüleme tetkikleri güvenle yapılmaktadır. Hastalarımızın sağlığı ve konforu için sürekli olarak teknolojik ve prosedürel gelişmeleri takip ediyor ve en güncel yöntemleri kullanarak kaliteli hizmet sunmaya odaklanıyoruz. Etik Hastanesi olarak, hastalarımızın ihtiyaçlarına ve sağlık gereksinimlerine en iyi şekilde cevap vermek için çalışmaktan gurur duyuyoruz. ` ,

image: "/images/...",
  },

  {
    id: "lazer-epilasyon",
    title: "Lazer Epilasyon",
    description: "Lazer epilasyon, istenmeyen tüylerden kurtulmak için uygulanan ve bunun için lazer kullanılan tıbbi bir işlemdir. Kadın ve erkekler tarafından tercih edilen lazer epilasyonda kıldaki pigment tarafından emilen bir ışık yayılarak ısıya dönüşür.",
    longDescription: ` Etik Hastanesi, istenmeyen tüylerden kurtulmak için kadınlar ve erkekler tarafından tercih edilen lazer epilasyon gibi modern tıbbi işlemleri sunan bir sağlık kuruluşudur. Lazer epilasyon, istenmeyen tüylerin kalıcı olarak azaltılması veya yok edilmesi amacıyla kullanılan etkili bir yöntemdir.


Lazer epilasyon işlemi, kıldaki pigment tarafından emilen bir ışığın cilde uygulanmasıyla gerçekleşir. Bu ışık, kıl köklerine nüfuz ederek ısıya dönüşür ve kıl üreten köklere zarar verir. Böylece, gelecekteki saç büyümesi engellenir ve istenmeyen tüylerin azalması sağlanır.


Etik Hastanesi'nde lazer epilasyon işlemi, kişinin cilt tipi, renk, kıl yapısı ve kalınlığı gibi faktörlere uygun olarak özelleştirilir. Ayrıca, kişinin hormonal durumu da dikkate alınarak tedavi planı oluşturulur. Bu sayede, her hasta için en etkili ve güvenli sonuçlar elde edilir.


Hastalar, Etik Hastanesi'nde uzmanlaşmış ekipler tarafından yapılan lazer epilasyon işlemleri ile istenmeyen tüylerden kalıcı olarak kurtulmanın keyfini yaşarlar. Modern tıbbın ve teknolojinin en son yeniliklerini kullanarak, hastalarımıza en iyi hizmeti sunmayı hedefliyoruz.`,

image: "/images/...",
  },
]
  },
  {
    id: "paramedikal",
    title: "Paramedikal",
    description: "Fizyoterapi ve destekleyici sağlık hizmetleri.",
    longDescription: "Uzun açıklama (detay sayfasında)",
    image: "/images/branches/genel-cerrahi.jpg",
    bullets: [
    "Tanı ve tedavi süreçleri",
    "Ameliyat öncesi değerlendirme",
    "Takip ve kontrol",
  ],

    icon: HandHeart,
   items: [
  {
    id: "psikiyatri",
    title: "Psikiyatri",
    image: "/images/branches/genel-cerrahi.jpg",
    description: "Psikiyatri; depresyon, anksiyete ve benzeri zihinsel sağlık sorunlarının tanı ve tedavisi ile ilgilenir. Bireylerin ruhsal sağlığını korumayı ve yaşam kalitesini artırmayı amaçlar.",
   longDescription: `
Etik Hastanesi Psikiyatri Bölümü, bireylerin ruh sağlığı ve psikolojik rahatsızlıklarının tanı, tedavi ve yönetimi üzerine uzmanlaşmış bir ana bilim dalıdır. Depresyon, anksiyete bozuklukları, bipolar bozukluk, şizofreni, obsesif-kompulsif bozukluk, panik atak ve diğer ruhsal durumlarla ilgilenir.

Bölümdeki uzman psikiyatristler, bireysel terapi, grup terapisi, ilaç tedavisi ve gerektiğinde ileri psikolojik testler gibi çeşitli tedavi yöntemleriyle hastalarına destek olur. Multidisipliner bir yaklaşımı benimseyerek, hastaların psikolojik, sosyal ve biyolojik yönlerini kapsayan bir tedavi planı geliştirilir.


Psikiyatri bölümü aynı zamanda stres yönetimi, yaşam becerilerinin geliştirilmesi, ilişki sorunları ve kişisel gelişim konularında danışmanlık hizmetleri sunar. Hastaların ruh sağlığını korumak ve yaşam kalitelerini artırmak bölümün temel amacıdır.


Etik Hastanesi Psikiyatri Bölümü uzmanları, psikiyatrik hastalıkların tanı ve tedavisi konusunda geniş bir eğitim ve deneyime sahiptir. Bu, tıp fakültesi eğitiminin ardından psikiyatri uzmanlık eğitimi almayı içerir. Her hastanın benzersiz olduğu bilinciyle, kişiselleştirilmiş tedavi planları oluşturulur, bu sayede hastaların kendilerini daha iyi hissetmeleri ve sosyal yaşamlarına devam edebilmeleri sağlanır.


Etik Hastanesi Psikiyatri Bölümü olarak, bireylerin ruh sağlığını iyileştirmek ve daha mutlu, daha sağlıklı bir toplum oluşturmak için çalışıyoruz. Her bir hastamıza saygı, anlayış ve destek sunarak, onların iyileşme süreçlerinde yanlarında olmayı hedefliyoruz.`,

simage: "/images/...",
  },
]
  },
] as const

export type MedicalUnitBranch = {
  id: string
  title: string
  description: string
  image?: string
  longDescription?: string
}

export type MedicalUnitCategory = {
  id: string
  title: string
  description: string
  icon: any
  items: MedicalUnitBranch[]
}

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Op. Dr. Hüseyin Kalgay",
    title: "Ortopedi",
    department: "Cerrahi Birimler",
    order: 1,
  },
  {
    id: "2",
    name: "Op. Dr. Selin Haver",
    title: "Ortopedi",
    department: "Cerrahi Birimler",
    order: 2,
  },
  {
    id: "3",
    name: "Op. Dr. Mehmet Arıkbuka",
    title: "Kalp ve Damar Cerrahisi",
    department: "Cerrahi Birimler",
    order: 3,
  },
  {
    id: "4",
    name: "Dr. Kamuran Arıkbuka",
    title: "Çocuk Sağlığı ve Hastalıkları",
    department: "Dahili Birimler",
    order: 1,
  },
  {
    id: "5",
    name: "Dr. Huriye Alasya",
    title: "Dahiliye",
    department: "Dahili Birimler",
    order: 2,
  },
  {
    id: "6",
    name: "Op. Dr. Ceyhun Erdoğan",
    title: "Genel Cerrahi",
    department: "Cerrahi Birimler",
    order: 4,
  },
  {
    id: "7",
    name: "Dr. Zafer Erdoğmuş",
    title: "Mikrobiyoloji ve Enfeksiyon Hastalıkları",
    department: "Dahili Birimler",
    order: 3,
  },
  {
    id: "8",
    name: "Dr. Burak Bahçıvan",
    title: "Radyoloji",
    department: "Diğer Birimler",
    order: 1,
  },
  {
    id: "9",
    name: "Dr. Kemal Tavukçu",
    title: "Kadın Hastalıkları ve Doğum",
    department: "Cerrahi Birimler",
    order: 5,
  },
  {
    id: "10",
    name: "Dr. Sıla Usar",
    title: "Nöroloji",
    department: "Dahili Birimler",
    order: 4,
  },
  {
    id: "11",
    name: "Dr. Ferda Selçuk",
    title: "Nöroloji",
    department: "Dahili Birimler",
    order: 5,
  },
  {
    id: "12",
    name: "Dr. Mehmet Ali Yeşilada",
    title: "Kulak Burun Boğaz",
    department: "Cerrahi Birimler",
    order: 6,
  },
  {
    id: "13",
    name: "Dr. Fatma Deniz",
    title: "Deri ve Zührevi Hastalıklar",
    department: "Dahili Birimler",
    order: 6,
  },
  {
    id: "14",
    name: "Dr. Refika Hüral",
    title: "Kardiyoloji",
    department: "Dahili Birimler",
    order: 7,
  },
  {
    id: "15",
    name: "Dr. Adil Öyyılkan",
    title: "Göz Hastalıkları",
    department: "Cerrahi Birimler",
    order: 7,
  },
  {
    id: "16",
    name: "Dr. Nafiye Direktör",
    title: "Dahiliye",
    department: "Dahili Birimler",
    order: 8,
  },
  {
    id: "17",
    name: "Dr. Güven Erkal",
    title: "Dahiliye",
    department: "Dahili Birimler",
    order: 9,
  },
  {
    id: "18",
    name: "Dr. İsmet Başar",
    title: "Üroloji",
    department: "Cerrahi Birimler",
    order: 8,
  },
  {
    id: "19",
    name: "Dr. Pınar Özbilgehan",
    title: "Estetik Plastik ve Rekonstrüktif Cerrahi",
    department: "Cerrahi Birimler",
    order: 9,
  },
  {
    id: "20",
    name: "Dr. Mehmet Salih Bağzıbağlı",
    title: "Çocuk Sağlığı ve Hastalıkları",
    department: "Dahili Birimler",
    order: 10,
  },
  {
    id: "21",
    name: "Ulus Kasap",
    title: "Biyokimyager",
    department: "Diğer Birimler",
    order: 2,
  },
]
export const doctorsPreview = [
  doctors[0],
  doctors[2],
  doctors[3],
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ayşe Yılmaz",
    role: "Hasta",
    text: "Doktorlarımız ve sağlık personeli gerçekten çok ilgiliydi. Tedavi sürecim boyunca kendimi güvende hissettim.",
    image: "/images/testimonials/patient-1.jpg",
  },
  {
    id: "2",
    name: "Mehmet Kaya",
    role: "Hasta",
    text: "Hastane çok temiz ve düzenli. Doktorlar oldukça profesyonel ve açıklayıcı bir şekilde bilgilendirme yapıyor.",
    image: "/images/testimonials/patient-2.jpg",
  },
  {
    id: "3",
    name: "Fatma Demir",
    role: "Hasta",
    text: "Randevu sürecinden tedaviye kadar her şey çok hızlı ve düzenliydi. Tüm ekibe teşekkür ederim.",
    image: "/images/testimonials/patient-3.jpg",
  },
  {
    id: "4",
    name: "Ali Çelik",
    role: "Hasta",
    text: "Gerçekten güven veren bir hastane. Doktorların ilgisi ve yaklaşımı sayesinde çok memnun kaldım.",
    image: "/images/testimonials/patient-4.jpg",
  },
]
export interface Doctor {
  id: string
  name: string
  title: string
  department: string
  order: number
  image?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  text: string
  image?: string
}
