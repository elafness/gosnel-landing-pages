import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLanding = () => {
  const navigate = useNavigate();
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [language, setLanguage] = useState('en');

  // Subscription state
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('email');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [subscriptionError, setSubscriptionError] = useState('');

  // Initialize language from localStorage if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem('gosnel_language');
      if (saved === 'en' || saved === 'ar') setLanguage(saved);
    } catch {
      // ignore
    }
  }, []);

  const setLang = (code) => {
    setLanguage(code);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('gosnel_language', code);
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Subscription handler
  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (subscriptionType === 'email') {
      if (!email.trim()) {
        setSubscriptionError('Please enter your email');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setSubscriptionError('Please enter a valid email');
        return;
      }
    } else {
      if (!phone.trim()) {
        setSubscriptionError('Please enter your phone number');
        return;
      }
    }

    setLoading(true);
    setSubscriptionError('');

    try {
      const endpoint =
        subscriptionType === 'email'
          ? 'http://localhost:8080/api/subscribers/subscribe'
          : 'http://localhost:8080/api/whatsapp-subscribers/subscribe';

      const body =
        subscriptionType === 'email'
          ? { email: email.trim(), subscription_type: 'newsletter' }
          : { phone_number: phone.trim(), subscription_type: 'newsletter' };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail('');
        setPhone('');
        setTimeout(() => setSubscribed(false), 8000);
      } else {
        const data = await response.json();
        setSubscriptionError(data.detail || 'Subscription failed');
      }
    } catch {
      setSubscriptionError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const t = {
    en: {
      hero_title:
        'Not sure what to eat today? \nOrder now and get your meal delivered! ',
      hero_desc:
        'Sit back and relax — GoSnel connects you with real local restaurants through smart AI chat.\nGet personalized meal recommendations, and place your order — all in one simple conversation.',
      about_button: '👉 Learn More',
      what_i_can_do: 'What I can do for you:',
      suggest_meals: 'Suggest meals based on your budget and taste',
      find_restaurants: 'Find restaurants that match your preferences',
      translate_menus: 'Remember your favorite dishes next time you chat',
      remember_favorites: 'Deliver your meal hot to your door',
      get_started: "👉 Start now, it's completely free!",
      try_demo: '💬 Try a demo chat',
      login: 'Log In',
      why_love: 'Why users love GoSnel ❤️',
      smart_suggestions: '⚡ Smart Suggestions',
      smart_desc:
        'Get meal ideas personalized to your taste and budget in seconds.',
      languages: '🌐 100+ Languages',
      languages_desc: "Speak your language, and I'll understand perfectly.",
      real_restaurants: '🏪 Real Restaurants',
      real_desc: 'Browse local vendors with authentic menus and real food.',
      natural_chat: '💬 Natural Conversations',
      natural_desc:
        "Chat with me like you're texting a friend — no confusing menus or clunky apps.",
      supported_languages: 'Supported Languages',
      dietary_title: '🥗 Dietary Preferences & Diet Goals',
      diet_goals_1: 'Weight-loss Goals',
      diet_goals_2: 'Diet Goals',
      dietary_desc1:
        "No matter your dietary goal, GoSnel has you covered! 🌿 Whether you're vegetarian, vegan, gluten-free, keto/low-carb, or following a weight-loss diet, we select healthy, balanced meals tailored to your taste and budget.",
      dietary_desc2:
        "With GoSnel, you don't have to worry about calories or ingredients — our  GoSnel-AI suggests meals that fit your diet, helping you reach your health goals without feeling deprived, all from real restaurants near you. Lose weight, stay healthy, and enjoy delicious meals! 😋",
      start_ordering: 'Start ordering in your language',
      trust_desc:
        'No subscription. No hidden fees. No language barriers.\nOrder anytime, cancel anytime — and try our demo chat free, no signup needed!',
      create_account: 'Create Your Account',
      live_preview: 'Demo Chat 💬',
      // Subscription section
      subscribe_title: 'Be the First to Know',
      subscribe_desc:
        'Get notified when we launch new features and special offers',
      notification_type: 'How would you like to be notified?',
      email_option: 'Email Notifications',
      whatsapp_option: 'WhatsApp Messages',
      email_placeholder: 'your@email.com',
      phone_placeholder: '051234567',
      notify_me: 'Notify Me',
      send_whatsapp: 'Send to WhatsApp',
      subscribe_success: 'Thank You! ✓',
      subscribe_success_email: 'Check your email for confirmation and updates!',
      subscribe_success_whatsapp: "We'll send you updates on WhatsApp!",
      subscribe_success_desc: 'See you soon with some delicious surprises 🍽️',
      privacy_note: 'We respect your privacy. Unsubscribe at any time.',
    },
    ar: {
      hero_title: 'محتار شو تاكل اليوم؟ \nاطلب والوجبة توصلك لبيتك! ',
      hero_desc:
        'خلًك مرتاح، وخذ اقتراحات وجبات تناسب ذوقك وميزانيتك، واطلب أكلك بكل سهولة—كل هذا من خلال محادثة وحدة ويا جوسنِل الذكي.',
      about_button: '🔸 اعرف أكثر عن جوسنل',
      what_i_can_do: 'شو أقدر أسوي لك ؟ 👇',
      suggest_meals: 'أقترح عليك وجبات حسب ميزانيتك وذوقك',
      find_restaurants: 'أساعدك تلقى المطاعم اللي تناسبك',
      translate_menus: 'أتذكر وجباتك المفضلة في المرات الجاية',
      remember_favorites: 'اوصلك الوجبة ع بيتك ساخنة',
      get_started: ' جرّب الحين مجانًا',
      try_demo: 'جرب محادثة سريعة ويا المساعد الذكي ',
      login: 'تسجيل الدخول',
      why_love: 'ليش الناس تحب جوسنيل ❤️',
      smart_suggestions: '⚡ اقتراحات ذكية',
      smart_desc: 'يعرف شو يناسب ذوقك وميزانيتك في ثواني',
      languages: '🌐 أكثر من 100 لغة',
      languages_desc: 'كلّمنا بلغتك، وأنا أفهمك عدل',
      real_restaurants: '🏪 مطاعم حقيقية',
      real_desc: 'تصفح مطاعم محلية حقيقية بأكل أصلي ولذيذ',
      natural_chat: '💬 محادثة طبيعية وسلسة',
      natural_desc:
        'كلّمني كأنك تراسل صديقك، بدون قوائم معقّدة ولا تطبيقات مربكة',
      supported_languages: 'اللغات المدعومة',
      dietary_title: '🥗 التفضيلات الغذائية والدايت',
      diet_goals_1: 'عندك هدف صحي؟',
      diet_goals_2: 'بدك تخفف وزنك؟',
      dietary_desc1:
        'مهما كان هدفك الغذائي، جوسنيل معك! 🌿 سواء كنت نباتي، نباتي صارم (Vegan)، أو تتبع نظام خالي من الغلوتين، أو كيتو / منخفض الكربوهيدرات، نحن نختار لك وجبات صحية، متوازنة، ومناسبة لميزانيتك وذوقك.',
      dietary_desc2:
        'مع جوسنيل، ما تحتاج تقلق من السعرات أو المكونات، أنا بيقترح لك وجبات متناسبة مع الدايت  لتخفيف الوزن، تساعدك توصل لهدفك الصحي بدون حرمان، وكل هذا من مطاعم حقيقية قريبة منك. خفف وزنك، حافظ على صحتك، وتمتع بوجبات لذيذة! 😋',
      start_ordering: 'ابدأ وجبتك بلغتك',
      trust_desc:
        'بدون اشتراك ولا رسوم ولا تعقيد.\nجرب المحادثة التوضيحية الحين، مجانية بالكامل بدون تسجيل!',
      create_account: 'أنشئ حسابك الآن',
      live_preview: 'محادثة تجريبية 💬',
      // Subscription section
      subscribe_title: 'كن أول من يعرف',
      subscribe_desc: 'احصل على إشعارات عندما نطلق ميزات جديدة وعروض خاصة',
      notification_type: 'كيف تحب نخبرك؟',
      email_option: 'إشعارات الإيميل',
      whatsapp_option: 'رسائل واتساب',
      email_placeholder: 'your@email.com',
      phone_placeholder: '051234567',
      notify_me: 'خبرني',
      send_whatsapp: 'أرسل للواتساب',
      subscribe_success: 'شكرًا لك! ✓',
      subscribe_success_email: 'تحقق من إيميلك للتأكيد والتحديثات!',
      subscribe_success_whatsapp: 'بنرسلك التحديثات على الواتساب!',
      subscribe_success_desc: 'نشوفك قريباً مع مفاجآت لذيذة 🍽️',
      privacy_note: 'نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.',
    },
  };

  const currentText = t[language];

  const chatExamples =
    language === 'ar'
      ? [
          { role: 'user', message: 'السلام عليكم' },
          {
            role: 'bot',
            message:
              'هلا يا طويل العمر 😋! اليوم جوعان؟ كيف كانت وجبة المندي المدخن آخر مرة؟',
          },
          { role: 'user', message: 'تمام' },
          {
            role: 'bot',
            message:
              'تمام بو زايد! مبسوط إنها عجبتك 🙌\nخلنا نرتّب لك اليوم شي أزكى منها! بس قبل، كم ميزانيتك اليوم عشان أقدر أختار لك أنسب الأطباق؟',
          },
          { role: 'user', message: '40' },
          {
            role: 'bot',
            message:
              ':ممتاز! بميزانية 40 درهم في عجمان، عندي لك خيارين لذيذين \n\n1️⃣ باستا الدجاج – 35 درهم 🍝  (ترند 89)\nباستا غنية وطريّة مع صوص ألفريدو الكريمي وقطع دجاج طرية… راحة نفسية بكل لقمة من [مطعم إيلاف]!\n\n2️⃣ برجر إيتاليانو المميز – 39 درهم 🍔 (تقييم 4.9)\nبرجر لحم عصيّب، عليه جبن سايح وبصل مكرمل وصوص ايطالي السري، ومعاه بطاطس مقرمشة عالطريق من [مطعم إيتاليانو]!\n\nكل الثنتين من أكثر الطلبات اللي يحبها الزباين، وتخليك راضي ومبسوط بعد الأكل 😋\nشو رايك؟ تختار أي وحدة اليوم؟ وخلال 30 دقيقة توصلك ساخنة ',
          },
          { role: 'user', message: '2' },
          {
            role: 'bot',
            message:
              'اختيار رهيب والله! 🍔\nتمت إضافة برجر التوقيع من مطعم إيتاليانو لعربتك 🛒\n\nبخبرك بتتبع الطلب مباشر أول بأول، وبيوصلك خلال 20–30 دقيقة تقريبا 🚗💨\nتأكد بعد من واتسابك، بتوصلك رسالة تأكيد هناك 😉\n\nاستمتع بوجبتك بو زايد، دايم تختار الصح 😋🔥',
          },
        ]
      : [
          { role: 'user', message: 'Hey' },
          {
            role: 'bot',
            message:
              "Yo, foodie! 😋 Hope you're hungry today! How was that [Grilled Chicken Wrap] last time?",
          },
          { role: 'user', message: 'Not bad' },
          {
            role: 'bot',
            message:
              "Umm...🤔 Let's make your next bite even better — but first, what's your budget for today's meal?\nThat way, I can find the perfect options just for you!",
          },
          { role: 'user', message: '40' },
          {
            role: 'bot',
            message:
              "Perfect! With a 40 AED budget in Ajman, here are two mouthwatering options waiting for you:\n\n1️⃣ Chicken Alfredo Pasta – 35 AED (Trending 89🔥)\nCreamy, rich, and full of flavor — tender chicken mixed with smooth Alfredo sauce and fettuccine. Comfort in every single bite! 🍝 from [Italiano Restaurant] \n\n2️⃣ Signature Burger – 39 AED (Rated 4.9⭐️)\nJuicy beef patty topped with melted cheese, caramelized onions, and MoM-foodi's secret sauce — served with crispy fries on the side. 🍔 from [MoM-foodi Restaurant]\n\nBoth meals are customer favorites — guaranteed to fill your stomach and brighten your mood!\nWhich one tempts you more today? and It will arrive hot 😄",
          },
          { role: 'user', message: '2' },
          {
            role: 'bot',
            message:
              "Awesome choice! 🍔\nYour Signature Burger from MoM-foodi Restaurant has been added to your cart 🛒\n\nI'll notify you with live tracking once it's on the way — it should arrive in about 20–30 minutes 🚗💨\nKeep an eye on your WhatsApp, you'll receive a confirmation message shortly.\n\nEnjoy your meal, foodie — you've got great taste! 😋🔥",
          },
        ];

  return (
    <>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <div
        style={{
          minHeight: '100vh',
          background: '#222b38',
          fontFamily: 'Inter, system-ui, sans-serif',
          color: '#f5f5f5',
          overflow: 'auto',
          direction: language === 'ar' ? 'rtl' : 'ltr',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: isMobile ? '16px 20px' : '24px 40px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: '#222b38',
            backdropFilter: 'blur(10px)',
            flexDirection: language === 'ar' ? 'row-reverse' : 'row',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            <img
              src="/SocialmediaSVG/gosnelLogoTransparate.png"
              alt="GoSnel"
              onError={(e) => {
                e.target.style.display = 'none';
                console.error('Failed to load GoSnel logo');
              }}
              style={{
                height: '40px',
                width: 'auto',
              }}
            />
            <h1
              style={{
                margin: 0,
                fontSize: isMobile ? 24 : 28,
                fontWeight: 700,
                background: 'linear-gradient(90deg, #4ECDC4, #1A9A93)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '1px',
              }}
            >
              GoSnel
            </h1>
          </div>
          <div
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              flexDirection: language === 'ar' ? 'row-reverse' : 'row',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: 6,
                background: 'rgba(255,255,255,0.08)',
                borderRadius: 8,
                padding: '8px 10px',
                border: '1px solid rgba(78, 205, 196, 0.3)',
                flexDirection: language === 'ar' ? 'row-reverse' : 'row',
                boxShadow: '0 2px 8px rgba(78, 205, 196, 0.1)',
              }}
            >
              {[
                { code: 'en', label: 'English' },
                { code: 'ar', label: 'عربي' },
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLang(lang.code)}
                  style={{
                    background:
                      language === lang.code ? '#4ECDC4' : 'transparent',
                    color: language === lang.code ? '#062c2a' : '#ffffff',
                    border: 'none',
                    padding: '8px 14px',
                    borderRadius: 6,
                    fontSize: isMobile ? 12 : 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (language !== lang.code)
                      e.target.style.color = '#4ECDC4';
                  }}
                  onMouseLeave={(e) => {
                    if (language !== lang.code)
                      e.target.style.color = '#b0b0b0';
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => navigate('/coming-soon')}
              style={{
                background: 'transparent',
                color: '#e7e7e7',
                border: '1px solid #4ECDC4',
                padding: isMobile ? '8px 16px' : '10px 24px',
                borderRadius: 8,
                fontSize: isMobile ? 12 : 14,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#4ECDC4';
                e.target.style.color = '#062c2a';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#e7e7e7';
              }}
            >
              {currentText.login}
            </button>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? 24 : 40,
            padding: isMobile ? '30px 20px' : '60px 40px',
            maxWidth: 1400,
            margin: '0 auto',
            alignItems: 'center',
          }}
        >
          <div>
            <h2
              style={{
                fontSize: isMobile ? 36 : 52,
                fontWeight: 800,
                lineHeight: 1.2,
                margin: '0 0 20px 0',
                background: 'linear-gradient(90deg, #ffffff, #4ECDC4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: language === 'ar' ? 'right' : 'left',
              }}
            >
              {currentText.hero_title}
            </h2>
            <p
              style={{
                fontSize: isMobile ? 16 : 18,
                color: '#b0b0b0',
                marginBottom: 32,
                lineHeight: 1.6,
                textAlign: language === 'ar' ? 'right' : 'left',
                whiteSpace: 'pre-wrap',
              }}
            >
              {currentText.hero_desc}
            </p>
            <button
              onClick={() =>
                navigate(
                  language === 'ar' ? '/user/about-us-ar' : '/user/about-us'
                )
              }
              style={{
                background: 'rgba(78, 205, 196, 0.15)',
                color: '#4ECDC4',
                border: '1px solid rgba(78, 205, 196, 0.4)',
                padding: '8px 14px',
                borderRadius: 6,
                fontSize: isMobile ? 12 : 13,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginBottom: 32,
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.15)';
              }}
            >
              {currentText.about_button}
            </button>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                marginBottom: 40,
                direction: language === 'ar' ? 'rtl' : 'ltr',
              }}
            >
              <h3
                style={{
                  fontSize: isMobile ? 16 : 18,
                  fontWeight: 700,
                  color: '#4ECDC4',
                  margin: '0 0 12px 0',
                  textAlign: language === 'ar' ? 'right' : 'left',
                }}
              >
                {currentText.what_i_can_do}
              </h3>
              {[
                currentText.suggest_meals,
                currentText.find_restaurants,
                currentText.translate_menus,
                currentText.remember_favorites,
              ].map((text, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    flexDirection: language === 'ar' ? 'row-reverse' : 'row',
                    justifyContent:
                      language === 'ar' ? 'flex-end' : 'flex-start',
                  }}
                >
                  {/* Left icon (mirrors visually based on direction) */}
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #4ECDC4, #1A9A93)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: 14,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                    aria-hidden
                  >
                    ✓
                  </div>

                  {/* Text */}
                  <span
                    style={{
                      fontSize: isMobile ? 14 : 16,
                      color: '#d0d0d0',
                      textAlign: language === 'ar' ? 'right' : 'left',
                      maxWidth: '80%',
                    }}
                  >
                    {text}
                  </span>

                  {/* (Right icon removed to keep a single check mark) */}
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                gap: 12,
                flexWrap: 'wrap',
                flexDirection: language === 'ar' ? 'row-reverse' : 'row',
              }}
            >
              <button
                onClick={() => navigate('/coming-soon')}
                style={{
                  background: 'linear-gradient(135deg, #4ECDC4, #1A9A93)',
                  color: '#062c2a',
                  border: 'none',
                  padding: isMobile ? '14px 28px' : '16px 40px',
                  borderRadius: 12,
                  fontSize: isMobile ? 14 : 18,
                  fontWeight: 700,
                  cursor: 'pointer',
                  letterSpacing: '.5px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 8px 24px rgba(78, 205, 196, 0.3)',
                  flex: isMobile ? '1' : 'auto',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px)';
                  e.target.style.boxShadow =
                    '0 12px 32px rgba(78, 205, 196, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow =
                    '0 8px 24px rgba(78, 205, 196, 0.3)';
                }}
              >
                {currentText.get_started}
              </button>
              <button
                onClick={() => navigate('/coming-soon')}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: '#4ECDC4',
                  border: '2px solid #4ECDC4',
                  padding: isMobile ? '12px 24px' : '14px 40px',
                  borderRadius: 12,
                  fontSize: isMobile ? 14 : 18,
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  flex: isMobile ? '1' : 'auto',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(78, 205, 196, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.1)';
                }}
              >
                {currentText.try_demo}
              </button>
            </div>
          </div>

          <div
            style={{
              background:
                'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(26, 154, 147, 0.1))',
              border: '1px solid rgba(78, 205, 196, 0.3)',
              borderRadius: 16,
              padding: isMobile ? 16 : 24,
              height: isMobile ? 350 : 500,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              overflow: 'hidden',
              marginTop: isMobile ? 20 : 0,
            }}
          >
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: '#4ECDC4',
                marginBottom: 8,
              }}
            >
              {currentText.live_preview}
            </div>
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                paddingRight: 8,
                direction: language === 'ar' ? 'rtl' : 'ltr',
              }}
            >
              {chatExamples.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: 8,
                    flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
                  }}
                >
                  {msg.role === 'bot' ? (
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        background: '#4ECDC4',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 18,
                        flexShrink: 0,
                      }}
                    >
                      🤖
                    </div>
                  ) : (
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        background: '#4ECDC4',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 18,
                        color: '#062c2a',
                        flexShrink: 0,
                        fontWeight: 700,
                      }}
                    >
                      👤
                    </div>
                  )}
                  <div
                    style={{
                      background:
                        msg.role === 'user'
                          ? '#4ECDC4'
                          : 'rgba(255,255,255,0.08)',
                      color: msg.role === 'user' ? '#062c2a' : '#e7e7e7',
                      padding: '12px 16px',
                      borderRadius:
                        msg.role === 'user'
                          ? '12px 4px 4px 12px'
                          : '4px 12px 12px 4px',
                      maxWidth: '75%',
                      fontSize: 12,
                      lineHeight: 1.5,
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                    }}
                  >
                    {msg.role === 'bot' && (
                      <strong style={{ color: '#4ECDC4' }}></strong>
                    )}
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            padding: isMobile ? '40px 20px' : '80px 40px',
            background: 'rgba(255,255,255,0.02)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <h3
            style={{
              fontSize: isMobile ? 28 : 36,
              fontWeight: 800,
              textAlign: 'center',
              marginBottom: isMobile ? 40 : 60,
              color: '#ffffff',
            }}
          >
            {currentText.why_love}
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile
                ? '1fr'
                : 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: isMobile ? 16 : 32,
              maxWidth: 1200,
              margin: '0 auto',
            }}
          >
            {[
              {
                title: currentText.smart_suggestions,
                desc: currentText.smart_desc,
              },
              {
                title: currentText.languages,
                desc: currentText.languages_desc,
              },
              {
                title: currentText.natural_chat,
                desc: currentText.natural_desc,
              },
            ].map((feature, i) => (
              <div
                key={i}
                onMouseEnter={() => !isMobile && setHoveredFeature(i)}
                onMouseLeave={() => !isMobile && setHoveredFeature(null)}
                style={{
                  background:
                    hoveredFeature === i
                      ? 'rgba(78, 205, 196, 0.15)'
                      : 'transparent',
                  border: '1px solid rgba(78, 205, 196, 0.2)',
                  padding: isMobile ? 24 : 32,
                  borderRadius: 12,
                  textAlign: language === 'ar' ? 'right' : 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  transform:
                    hoveredFeature === i && !isMobile
                      ? 'translateY(-8px)'
                      : 'translateY(0)',
                }}
              >
                <h4
                  style={{
                    fontSize: isMobile ? 18 : 20,
                    fontWeight: 700,
                    marginBottom: 12,
                    color: '#4ECDC4',
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  style={{
                    fontSize: isMobile ? 13 : 14,
                    color: '#b0b0b0',
                    lineHeight: 1.5,
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dietary Preferences Section */}
        <div
          style={{
            padding: isMobile ? '40px 20px' : '60px 40px',
            background:
              'linear-gradient(135deg, rgba(78, 205, 196, 0.08), rgba(26, 154, 147, 0.05))',
            borderTop: '1px solid rgba(78, 205, 196, 0.2)',
            borderBottom: '1px solid rgba(78, 205, 196, 0.2)',
            direction: language === 'ar' ? 'rtl' : 'ltr',
          }}
        >
          <h3
            style={{
              fontSize: isMobile ? 24 : 32,
              fontWeight: 800,
              marginBottom: 40,
              color: '#ffffff',
              textAlign: 'center',
            }}
          >
            {currentText.dietary_title}
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: isMobile ? 24 : 32,
              maxWidth: 1000,
              margin: '0 auto',
            }}
          >
            {/* First Card */}
            <div
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(78, 205, 196, 0.3)',
                borderRadius: 12,
                padding: isMobile ? 24 : 32,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.background = 'rgba(78, 205, 196, 0.12)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 24px rgba(78, 205, 196, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              <h4
                style={{
                  fontSize: isMobile ? 16 : 18,
                  fontWeight: 700,
                  color: '#4ECDC4',
                  margin: '0 0 16px 0',
                  textAlign: language === 'ar' ? 'right' : 'left',
                }}
              >
                {currentText.diet_goals_1}
              </h4>
              <p
                style={{
                  fontSize: isMobile ? 14 : 16,
                  color: '#d0d0d0',
                  lineHeight: 1.7,
                  margin: 0,
                  textAlign: language === 'ar' ? 'right' : 'left',
                }}
              >
                {currentText.dietary_desc1}
              </p>
            </div>

            {/* Second Card */}
            <div
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(78, 205, 196, 0.3)',
                borderRadius: 12,
                padding: isMobile ? 24 : 32,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.background = 'rgba(78, 205, 196, 0.12)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 24px rgba(78, 205, 196, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              <h4
                style={{
                  fontSize: isMobile ? 16 : 18,
                  fontWeight: 700,
                  color: '#4ECDC4',
                  margin: '0 0 16px 0',
                  textAlign: language === 'ar' ? 'right' : 'left',
                }}
              >
                {currentText.diet_goals_2}
              </h4>
              <p
                style={{
                  fontSize: isMobile ? 14 : 16,
                  color: '#d0d0d0',
                  lineHeight: 1.7,
                  margin: 0,
                  textAlign: language === 'ar' ? 'right' : 'left',
                }}
              >
                {currentText.dietary_desc2}
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: isMobile ? '40px 20px' : '60px 40px',
            textAlign: 'center',
            background: 'rgba(78, 205, 196, 0.05)',
            borderTop: '1px solid rgba(78, 205, 196, 0.2)',
            borderBottom: '1px solid rgba(78, 205, 196, 0.2)',
            direction: language === 'ar' ? 'rtl' : 'ltr',
          }}
        >
          <h3
            style={{
              fontSize: isMobile ? 24 : 32,
              fontWeight: 800,
              marginBottom: 24,
              color: '#ffffff',
            }}
          >
            {currentText.supported_languages}
          </h3>
          <p
            style={{
              fontSize: isMobile ? 14 : 16,
              color: '#b0b0b0',
              marginBottom: 32,
              maxWidth: 800,
              margin: '0 auto 32px',
            }}
          >
            {language === 'ar'
              ? 'English – العربية – हिन्दी – Español – Français – 中文 – 日本語 – 한국어 – Türkçe – Português – Русский – Italiano – Deutsch – Ελληνικά – وغيرها أكثر من 50 لغة '
              : 'English, Arabic (العربية), Hindi (हिन्दी), Spanish (Español), French (Français), Chinese (中文), Japanese (日本語), Korean (한국어), Turkish (Türkçe), Portuguese (Português), Russian (Русский), Italian (Italiano), German (Deutsch), Greek (Ελληνικά), Thai, Vietnamese, Filipino, Indonesian, Malay, Swedish, Norwegian, Danish, Finnish, Polish, Dutch, Czech, Hungarian, Romanian, Bulgarian, Croatian, Serbian, Slovak, Slovenian, Hebrew, Farsi, Urdu, Bengali, Tamil, Telugu, Kannada, Marathi, Gujarati, and 50+ more languages.'}
          </p>
        </div>

        <div
          style={{
            padding: isMobile ? '40px 20px' : '60px 40px',
            textAlign: 'center',
            direction: language === 'ar' ? 'rtl' : 'ltr',
          }}
        >
          <h3
            style={{
              fontSize: isMobile ? 24 : 28,
              fontWeight: 700,
              marginBottom: 24,
              color: '#ffffff',
            }}
          >
            {currentText.start_ordering}
          </h3>
          <p
            style={{
              fontSize: isMobile ? 14 : 16,
              color: '#b0b0b0',
              marginBottom: 40,
              maxWidth: 600,
              margin: '0 auto 40px',
              lineHeight: 1.6,
              whiteSpace: 'pre-wrap',
            }}
          >
            {currentText.trust_desc}
          </p>
          <button
            onClick={() => navigate('/user/signup')}
            style={{
              background: 'linear-gradient(135deg, #4ECDC4, #1A9A93)',
              color: '#062c2a',
              border: 'none',
              padding: isMobile ? '14px 32px' : '18px 50px',
              borderRadius: 12,
              fontSize: isMobile ? 14 : 18,
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(78, 205, 196, 0.4)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            {currentText.create_account}
          </button>
        </div>

        {/* Newsletter Subscription Section */}
        <div
          style={{
            maxWidth: 600,
            margin: '80px auto 0',
            padding: isMobile ? '40px 20px' : '60px 40px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            border: '1px solid rgba(78, 205, 196, 0.2)',
            textAlign: 'center',
            direction: language === 'ar' ? 'rtl' : 'ltr',
          }}
        >
          {subscribed ? (
            <div style={{ padding: '20px 0' }}>
              {/* Success checkmark icon */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'rgba(78, 205, 196, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ color: '#4ECDC4' }}
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#4ECDC4',
                  marginBottom: 12,
                }}
              >
                {currentText.subscribe_success}
              </h3>

              <p
                style={{
                  fontSize: 16,
                  color: '#e5e5e5',
                  lineHeight: 1.6,
                  marginBottom: 12,
                }}
              >
                {subscriptionType === 'email'
                  ? currentText.subscribe_success_email
                  : currentText.subscribe_success_whatsapp}
              </p>

              <p
                style={{
                  fontSize: 14,
                  color: '#999',
                }}
              >
                {currentText.subscribe_success_desc}
              </p>
            </div>
          ) : (
            <>
              {/* Email icon */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'rgba(78, 205, 196, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ color: '#4ECDC4' }}
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3
                style={{
                  fontSize: isMobile ? 24 : 32,
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: 12,
                  lineHeight: 1.2,
                }}
              >
                {currentText.subscribe_title}
              </h3>

              <p
                style={{
                  fontSize: 16,
                  color: '#aaa',
                  lineHeight: 1.6,
                  marginBottom: 32,
                }}
              >
                {currentText.subscribe_desc}
              </p>

              <form onSubmit={handleSubscribe} style={{ width: '100%' }}>
                {/* Subscription Type Selection */}
                <div
                  style={{
                    marginBottom: 24,
                    textAlign: language === 'ar' ? 'right' : 'left',
                  }}
                >
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#ffffff',
                      marginBottom: 16,
                    }}
                  >
                    {currentText.notification_type}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 12,
                      alignItems: 'flex-start',
                    }}
                  >
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        cursor: 'pointer',
                        fontSize: 14,
                        color: '#ffffff',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <input
                        type="radio"
                        name="subscriptionType"
                        value="email"
                        checked={subscriptionType === 'email'}
                        onChange={(e) => {
                          setSubscriptionType(e.target.value);
                          setEmail('');
                          setPhone('');
                          setSubscriptionError('');
                        }}
                        style={{
                          accentColor: '#4ECDC4',
                          width: 16,
                          height: 16,
                        }}
                      />
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ color: '#4ECDC4' }}
                      >
                        <path
                          d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <polyline
                          points="22,6 12,13 2,6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {currentText.email_option}
                    </label>

                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        cursor: 'pointer',
                        fontSize: 14,
                        color: '#ffffff',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <input
                        type="radio"
                        name="subscriptionType"
                        value="whatsapp"
                        checked={subscriptionType === 'whatsapp'}
                        onChange={(e) => {
                          setSubscriptionType(e.target.value);
                          setEmail('');
                          setPhone('');
                          setSubscriptionError('');
                        }}
                        style={{
                          accentColor: '#25D366',
                          width: 16,
                          height: 16,
                        }}
                      />
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ color: '#25D366' }}
                      >
                        <path
                          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"
                          fill="currentColor"
                        />
                      </svg>
                      {currentText.whatsapp_option}
                    </label>
                  </div>
                </div>

                {/* Input Field */}
                <div style={{ marginBottom: 16 }}>
                  {subscriptionType === 'email' ? (
                    <input
                      type="email"
                      placeholder={currentText.email_placeholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        fontSize: 16,
                        border: '1px solid rgba(78, 205, 196, 0.3)',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: '#ffffff',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                        boxSizing: 'border-box',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#4ECDC4';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(78, 205, 196, 0.3)';
                      }}
                    />
                  ) : (
                    <input
                      type="tel"
                      placeholder={currentText.phone_placeholder}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={loading}
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        fontSize: 16,
                        border: '1px solid rgba(37, 211, 102, 0.3)',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: '#ffffff',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                        boxSizing: 'border-box',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#25D366';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(37, 211, 102, 0.3)';
                      }}
                    />
                  )}
                </div>

                {/* Error Message */}
                {subscriptionError && (
                  <div
                    style={{
                      padding: '12px 16px',
                      borderRadius: '6px',
                      background: 'rgba(220, 53, 69, 0.1)',
                      border: '1px solid rgba(220, 53, 69, 0.3)',
                      color: '#ff6b6b',
                      fontSize: 14,
                      marginBottom: 16,
                      textAlign: 'center',
                    }}
                  >
                    {subscriptionError}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '16px 32px',
                    fontSize: 16,
                    fontWeight: 600,
                    color:
                      subscriptionType === 'whatsapp' ? '#000000' : '#000000',
                    background:
                      subscriptionType === 'whatsapp' ? '#25D366' : '#4ECDC4',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    opacity: loading ? 0.6 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.target.style.background =
                        subscriptionType === 'whatsapp' ? '#1ea952' : '#35bab1';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      e.target.style.background =
                        subscriptionType === 'whatsapp' ? '#25D366' : '#4ECDC4';
                    }
                  }}
                >
                  {loading ? (
                    <>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ animation: 'spin 1s linear infinite' }}
                      >
                        <path
                          d="M21 12A9 9 0 1 1 3 12A9 9 0 0 1 21 12Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          opacity="0.25"
                        />
                        <path
                          d="M21 12A9 9 0 0 0 12 3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                      Loading...
                    </>
                  ) : subscriptionType === 'email' ? (
                    currentText.notify_me
                  ) : (
                    currentText.send_whatsapp
                  )}
                </button>
              </form>

              <p
                style={{
                  fontSize: 12,
                  color: '#777',
                  marginTop: 16,
                  textAlign: 'center',
                }}
              >
                {currentText.privacy_note}
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <footer
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: isMobile ? '40px 20px' : '60px 40px',
            direction: language === 'ar' ? 'rtl' : 'ltr',
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
              gap: isMobile ? 40 : 60,
              marginBottom: 40,
            }}
          >
            {/* Section 1: Brand */}
            <div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: 12,
                }}
              >
                GoSnel
              </h3>
              <p style={{ fontSize: 13, color: '#a0a0a0', lineHeight: 1.6 }}>
                Smart Meal Assistant.
              </p>
            </div>

            {/* Section 2: Quick Links */}
            <div>
              <h4
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: 16,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                For Users
              </h4>
              <nav
                style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <a
                  onClick={() => navigate('/')}
                  style={{
                    fontSize: 13,
                    color: '#a0a0a0',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    padding: '4px 0',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#4ECDC4')}
                  onMouseLeave={(e) => (e.target.style.color = '#a0a0a0')}
                >
                  Home
                </a>
                <a
                  onClick={() =>
                    navigate(
                      language === 'ar'
                        ? '/user/how-it-works-ar'
                        : '/user/how-it-works'
                    )
                  }
                  style={{
                    fontSize: 13,
                    color: '#a0a0a0',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    padding: '4px 0',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#4ECDC4')}
                  onMouseLeave={(e) => (e.target.style.color = '#a0a0a0')}
                >
                  How it works
                </a>

                <span
                  style={{
                    fontSize: 13,
                    color: '#666',
                    padding: '4px 0',
                    fontStyle: 'italic',
                  }}
                >
                  Download App (Coming Soon)
                </span>
                <a
                  onClick={() =>
                    navigate(language === 'ar' ? '/user/faq-ar' : '/user/faq')
                  }
                  style={{
                    fontSize: 13,
                    color: '#a0a0a0',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    padding: '4px 0',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#4ECDC4')}
                  onMouseLeave={(e) => (e.target.style.color = '#a0a0a0')}
                >
                  FAQ
                </a>
                <a
                  onClick={() =>
                    navigate(language === 'ar' ? '/user/help-ar' : '/user/help')
                  }
                  style={{
                    fontSize: 13,
                    color: '#a0a0a0',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    padding: '4px 0',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#4ECDC4')}
                  onMouseLeave={(e) => (e.target.style.color = '#a0a0a0')}
                >
                  Help & Support
                </a>
                <a
                  onClick={() =>
                    navigate(
                      language === 'ar' ? '/user/about-us-ar' : '/user/about-us'
                    )
                  }
                  style={{
                    fontSize: 13,
                    color: '#a0a0a0',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    padding: '4px 0',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#4ECDC4')}
                  onMouseLeave={(e) => (e.target.style.color = '#a0a0a0')}
                >
                  About Us
                </a>
              </nav>
            </div>

            {/* Section 3: Legal */}
            <div>
              <h4
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: 16,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Legal
              </h4>
              <nav
                style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <a
                  onClick={() => navigate('/user/privacy')}
                  style={{
                    fontSize: 13,
                    color: '#a0a0a0',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    padding: '4px 0',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#4ECDC4')}
                  onMouseLeave={(e) => (e.target.style.color = '#a0a0a0')}
                >
                  Privacy Policy
                </a>
                <a
                  onClick={() => navigate('/user/terms')}
                  style={{
                    fontSize: 13,
                    color: '#a0a0a0',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    padding: '4px 0',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#4ECDC4')}
                  onMouseLeave={(e) => (e.target.style.color = '#a0a0a0')}
                >
                  Terms & Conditions
                </a>
                <a
                  onClick={() => navigate('/user/cookies')}
                  style={{
                    fontSize: 13,
                    color: '#a0a0a0',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    padding: '4px 0',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#4ECDC4')}
                  onMouseLeave={(e) => (e.target.style.color = '#a0a0a0')}
                >
                  Cookie Policy
                </a>
              </nav>
            </div>

            {/* Section 4: For Restaurants */}
            <div>
              <h4
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: 16,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                For Restaurants
              </h4>
              <nav
                style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <a
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate('/vendor/landing');
                  }}
                  style={{
                    fontSize: 13,
                    color: '#4ECDC4',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    padding: '4px 0',
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#1A9A93')}
                  onMouseLeave={(e) => (e.target.style.color = '#4ECDC4')}
                >
                  Partner with GoSnel
                </a>
                <a
                  onClick={() => navigate('/vendor/demo/request')}
                  style={{
                    fontSize: 13,
                    color: '#a0a0a0',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    padding: '4px 0',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#4ECDC4')}
                  onMouseLeave={(e) => (e.target.style.color = '#a0a0a0')}
                >
                  Request a Demo
                </a>
                <a
                  onClick={() => navigate('/vendor')}
                  style={{
                    fontSize: 13,
                    color: '#a0a0a0',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    padding: '4px 0',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#4ECDC4')}
                  onMouseLeave={(e) => (e.target.style.color = '#a0a0a0')}
                >
                  Vendor Login
                </a>
                <a
                  onClick={() => navigate('/vendor/marketing/why-partner')}
                  style={{
                    fontSize: 13,
                    color: '#a0a0a0',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    padding: '4px 0',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#4ECDC4')}
                  onMouseLeave={(e) => (e.target.style.color = '#a0a0a0')}
                >
                  How GoSnel helps restaurants
                </a>
                <a
                  onClick={() => navigate('/vendor/contact')}
                  style={{
                    fontSize: 13,
                    color: '#a0a0a0',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    padding: '4px 0',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#4ECDC4')}
                  onMouseLeave={(e) => (e.target.style.color = '#a0a0a0')}
                >
                  Contact Business Team
                </a>
              </nav>
              <p
                style={{
                  fontSize: 12,
                  color: '#808080',
                  marginTop: 16,
                  lineHeight: 1.5,
                  fontStyle: 'italic',
                  paddingTop: 12,
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                Grow your restaurant with GoSnel AI.
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 24,
              paddingBottom: 24,
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {/* Instagram */}
            <a
              href="https://www.instagram.com/gosnelai?igsh=NHA2eHhrZ2tpMnFu"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'rgba(78, 205, 196, 0.1)',
                border: '1px solid rgba(78, 205, 196, 0.3)',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(78, 205, 196, 0.3)';
                e.currentTarget.style.borderColor = '#4ECDC4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(78, 205, 196, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(78, 205, 196, 0.3)';
              }}
              title="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: '#4ECDC4' }}
              >
                <path d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.067 1.172.054 1.972.244 2.663.520a5.043 5.043 0 0 1 1.823 1.188 5.047 5.047 0 0 1 1.188 1.823c.276.691.466 1.491.52 2.663C23.988 9.638 24 10.012 24 12c0 2.988-.013 3.362-.067 4.534-.054 1.172-.244 1.972-.52 2.663a5.047 5.047 0 0 1-1.188 1.823 5.054 5.054 0 0 1-1.823 1.188c-.691.276-1.491.466-2.663.52C15.362 22.988 14.988 23 12 23c-2.988 0-3.362-.013-4.534-.067-1.172-.054-1.972-.244-2.663-.52a5.043 5.043 0 0 1-1.823-1.188 5.047 5.047 0 0 1-1.188-1.823c-.276-.691-.466-1.491-.52-2.663C.012 15.362 0 14.988 0 12c0-2.988.013-3.362.067-4.534.054-1.172.244-1.972.52-2.663a5.043 5.043 0 0 1 1.188-1.823A5.047 5.047 0 0 1 3.802 1.586c.691-.276 1.491-.466 2.663-.52zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064-2.937 0-3.285.011-4.445.064-1.119.052-1.733.242-2.143.402-.537.209-.921.457-1.321.857-.4.4-.648.784-.857 1.321-.16.41-.35 1.024-.402 2.143-.053 1.16-.064 1.508-.064 4.445 0 2.937.011 3.285.064 4.445.052 1.119.242 1.733.402 2.143.209.537.457.921.857 1.321.4.4.784.648 1.321.857.41.16 1.024.35 2.143.402 1.16.053 1.508.064 4.445.064 2.937 0 3.285-.011 4.445-.064 1.119-.052 1.733-.242 2.143-.402.537-.209.921-.457 1.321-.857.4-.4.648-.784.857-1.321.16-.41.35-1.024.402-2.143.053-1.16.064-1.508.064-4.445 0-2.937-.011-3.285-.064-4.445-.052-1.119-.242-1.733-.402-2.143-.209-.537-.457-.921-.857-1.321-.4-.4-.784-.648-1.321-.857-.41-.16-1.024-.35-2.143-.402zM5.5 12a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0zm1.5 0a5 5 0 1 0 10 0 5 5 0 0 0-10 0zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1AGMEkChEX/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'rgba(78, 205, 196, 0.1)',
                border: '1px solid rgba(78, 205, 196, 0.3)',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(78, 205, 196, 0.3)';
                e.currentTarget.style.borderColor = '#4ECDC4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(78, 205, 196, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(78, 205, 196, 0.3)';
              }}
              title="Facebook"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: '#4ECDC4' }}
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Twitter/X */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'rgba(128, 128, 128, 0.1)',
                border: '1px solid rgba(128, 128, 128, 0.3)',
                cursor: 'not-allowed',
                opacity: 0.5,
              }}
              title="Twitter (Coming Soon)"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: '#808080' }}
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.694-5.834 6.694H2.561l7.746-8.835L2.25 2.25h6.734l4.61 6.095L17.45 2.25zM16.369 18.713h1.836L5.305 3.975H3.34z" />
              </svg>
            </div>

            {/* Snapchat */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'rgba(128, 128, 128, 0.1)',
                border: '1px solid rgba(128, 128, 128, 0.3)',
                cursor: 'not-allowed',
                opacity: 0.5,
              }}
              title="Snapchat (Coming Soon)"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 64 64"
                fill="currentColor"
                style={{ color: '#FFFFFF' }}
              >
                <g>
                  <g>
                    <path
                      d="M32,0C14.327,0,0,14.327,0,32c0,17.673,14.327,32,32,32s32-14.327,32-32C64,14.327,49.673,0,32,0z"
                      fill="#222b38"
                    />
                  </g>
                </g>
                <path
                  d="M32.243,48.835c-0.098,0-0.194-0.002-0.291-0.008l0,0c-0.061,0.004-0.126,0.008-0.189,0.008    c-2.251,0-3.698-1.021-5.095-2.009c-0.966-0.682-1.876-1.326-2.948-1.503c-0.524-0.088-1.045-0.13-1.548-0.13    c-0.907,0-1.624,0.141-2.145,0.242c-0.318,0.063-0.591,0.116-0.801,0.116c-0.218,0-0.452-0.047-0.556-0.397    c-0.09-0.304-0.153-0.597-0.216-0.88c-0.159-0.731-0.273-1.182-0.579-1.228c-3.571-0.552-4.594-1.304-4.822-1.838    c-0.033-0.075-0.051-0.153-0.055-0.228c-0.012-0.206,0.134-0.385,0.336-0.42c5.49-0.905,7.951-6.515,8.053-6.753    c0.002-0.006,0.006-0.012,0.008-0.02c0.336-0.68,0.401-1.271,0.196-1.756c-0.377-0.888-1.605-1.277-2.418-1.536    c-0.2-0.063-0.387-0.122-0.536-0.181c-1.624-0.642-1.758-1.3-1.695-1.636c0.108-0.572,0.874-0.97,1.491-0.97    c0.169,0,0.318,0.031,0.444,0.09c0.729,0.342,1.387,0.515,1.956,0.515c0.784,0,1.127-0.33,1.169-0.373    c-0.02-0.371-0.045-0.76-0.069-1.159c-0.163-2.595-0.367-5.82,0.454-7.662c2.461-5.519,7.68-5.947,9.22-5.947    c0.039,0,0.676-0.006,0.676-0.006h0.092c1.544,0,6.774,0.43,9.237,5.951c0.821,1.842,0.617,5.069,0.454,7.662l-0.006,0.112    c-0.022,0.361-0.045,0.713-0.063,1.049c0.039,0.041,0.354,0.342,1.065,0.371l0,0c0.54-0.02,1.161-0.194,1.844-0.511    c0.2-0.094,0.422-0.112,0.572-0.112c0.23,0,0.464,0.045,0.658,0.126l0.012,0.004c0.552,0.196,0.913,0.583,0.921,0.986    c0.008,0.381-0.283,0.951-1.707,1.514c-0.147,0.057-0.336,0.118-0.536,0.181c-0.815,0.259-2.043,0.648-2.418,1.536    c-0.206,0.485-0.141,1.076,0.196,1.756c0.002,0.006,0.006,0.012,0.008,0.02c0.102,0.238,2.561,5.847,8.053,6.751    c0.204,0.033,0.348,0.214,0.336,0.42c-0.004,0.077-0.022,0.155-0.057,0.23c-0.226,0.53-1.249,1.281-4.82,1.833    c-0.291,0.045-0.405,0.426-0.579,1.222c-0.063,0.289-0.128,0.574-0.216,0.876c-0.075,0.261-0.238,0.381-0.511,0.381h-0.045    c-0.189,0-0.458-0.035-0.799-0.1c-0.605-0.118-1.283-0.228-2.145-0.228c-0.503,0-1.025,0.045-1.548,0.13    c-1.072,0.179-1.982,0.821-2.946,1.501C35.941,47.812,34.495,48.835,32.243,48.835z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>

            {/* TikTok */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'rgba(128, 128, 128, 0.1)',
                border: '1px solid rgba(128, 128, 128, 0.3)',
                cursor: 'not-allowed',
                opacity: 0.5,
              }}
              title="TikTok (Coming Soon)"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 250 250"
                fill="currentColor"
                style={{ color: '#FFFFFF' }}
              >
                <path
                  d="M157.97,91.74c-4.59-3.59-8.13-8.78-10.39-15.89-.47-1.47-.88-3.01-1.24-4.65h-16.52v72.58l-.04-.04c.01.28.04.56.04.85,0,9.69-7.85,17.54-17.54,17.54-3.66,0-7.05-1.12-9.86-3.03-4.64-3.16-7.68-8.48-7.68-14.51,0-9.69,7.85-17.54,17.54-17.54,1.44,0,2.83.19,4.16.52l.14-12.39.05-4.37c-1.43-.18-2.88-.29-4.35-.29-18.81,0-34.07,15.25-34.07,34.07,0,10.59,4.83,20.05,12.41,26.3,5.89,4.85,13.43,7.77,21.65,7.77,17.33,0,31.92-12.36,34.07-29.11v-46.14c1.47,2.02,3.01,3.72,4.65,5.17.37.33.75.64,1.12.94,5.48,4.35,11.92,5.99,19.67,6.63v-18.51c-5.28-.96-9.93-2.86-13.82-5.9Z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UCKOG_phzLcbsNj0MVXCEAfA"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'rgba(78, 205, 196, 0.1)',
                border: '1px solid rgba(78, 205, 196, 0.3)',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(78, 205, 196, 0.3)';
                e.currentTarget.style.borderColor = '#4ECDC4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(78, 205, 196, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(78, 205, 196, 0.3)';
              }}
              title="YouTube"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: '#4ECDC4' }}
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: 24,
              textAlign: 'center',
              fontSize: 12,
              color: '#666',
            }}
          >
            <p>© 2025 GoSnel. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default UserLanding;
