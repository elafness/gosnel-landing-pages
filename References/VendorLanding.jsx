import {
  Groups as GroupsIcon,
  TrendingUp as TrendingUpIcon,
  VerifiedUser as VerifiedUserIcon,
} from '@mui/icons-material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GoSnelAIAvatar = ({ size = 36 }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #4ECDC4, #1A9A93)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size * 0.5,
      fontWeight: 800,
      color: '#062c2a',
      boxShadow: `0 4px 12px rgba(78, 205, 196, 0.4)`,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent)',
        pointerEvents: 'none',
      }}
    />
    GS
  </div>
);

// FAQ Item Component
const FAQItem = ({ question, answer, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(78, 205, 196, 0.2)',
        borderRadius: 12,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: isMobile ? '16px 20px' : '20px 24px',
          background: isOpen ? 'rgba(78, 205, 196, 0.1)' : 'transparent',
          border: 'none',
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.target.style.background = 'rgba(78, 205, 196, 0.1)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobile && !isOpen) {
            e.target.style.background = 'transparent';
          }
        }}
      >
        <span
          style={{
            fontSize: isMobile ? 14 : 16,
            fontWeight: 600,
            color: '#ffffff',
            lineHeight: 1.4,
          }}
        >
          {question}
        </span>
        <span
          style={{
            fontSize: 24,
            color: '#4ECDC4',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
            marginLeft: 16,
          }}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div
          style={{
            padding: isMobile ? '0 20px 16px' : '0 24px 20px',
            borderTop: '1px solid rgba(78, 205, 196, 0.2)',
            background: 'rgba(78, 205, 196, 0.05)',
          }}
        >
          <p
            style={{
              fontSize: isMobile ? 13 : 14,
              color: '#b0b0b0',
              lineHeight: 1.6,
              margin: '16px 0 0',
            }}
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const VendorLanding = () => {
  const navigate = useNavigate();
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [language, setLanguage] = useState('en');

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const t = {
    en: {
      hero_title: 'Do you own a restaurant in Ajman and offer delivery?',
      hero_desc:
        "Over 1,000 GoSnel users are waiting for new restaurants in the emirate.\n\nSign up free during the trial, add your dishes… and we'll handle the rest.",
      get_started: 'Register Now',
      try_demo: 'Request a Demo',
      login: 'Log In',
      what_we_offer: 'What GoSnel offers your restaurant:',
      smart_menu: 'Connects you with customers ready to order',
      smart_menu_desc:
        'No ads, no competition with hundreds of restaurants like other apps.',
      multilingual:
        'Recommends your dishes directly without competing with hundreds of restaurants',
      multilingual_desc:
        'Your menu gets real visibility to customers who want what you serve.',
      zero_setup: 'No setup fees or commitments',
      zero_setup_desc:
        'Free to join during the trial — start receiving orders immediately.',
      real_time: '',
      real_time_desc: '',
      why_love: 'How GoSnel Works',
      increase_orders: '1️⃣ Customers submit ready-to-order requests',
      increase_orders_desc:
        'Customers find your restaurant and submit orders through the app.',
      reduce_calls: '2️⃣ You prepare the food',
      reduce_calls_desc:
        'You receive instant notifications and start preparing orders.',
      global_reach: '3️⃣ You deliver to the customer',
      global_reach_desc:
        'Your driver picks up and delivers the order to the customer.',
      easy_integration: '4️⃣ You track your earnings',
      easy_integration_desc:
        'See your daily orders and earnings in your simple dashboard.',
      features_title: 'Common Questions',
      menu_translations: 'Do I need technical experience?',
      menu_translations_desc:
        'No — just send your menu and we set everything up for you.',
      cta_section: 'Ready to get started?',
      cta_desc:
        'Add your dishes today and reach customers already waiting for new restaurants in Ajman.',
      create_account: 'Create your restaurant account — free during the trial',

      // Why Partner with GoSnel Section
      why_partner_title: 'Why Partner with GoSnel',
      reach_customers_title: 'Reach More Customers',
      reach_customers_desc:
        'Access thousands of hungry customers in your area waiting to order from you. Expand your reach without expanding your restaurant.',
      earn_money_title: 'Build Customer Trust',
      earn_money_desc:
        'Customers trust GoSnel for reliable service and quality. Join a platform known for transparency, fast support, and customer satisfaction that builds lasting relationships.',
      grow_business_title: 'Grow Your Business',
      grow_business_desc:
        'Access marketing tools, analytics, and insights to increase sales and reach customers. We succeed when you succeed.',

      // How It Works Section
      how_it_works_title: 'How GoSnel Works',
      step1_title: 'Customers submit ready-to-order requests',
      step1_desc:
        'Customers find your restaurant and submit orders through the app.',
      step2_title: 'You prepare the food',
      step2_desc:
        'You receive instant notifications and start preparing orders.',
      step3_title: 'You deliver to the customer',
      step3_desc:
        'Your driver picks up and delivers the order to the customer.',
      step4_title: 'You track your earnings',
      step4_desc:
        'See your daily orders and earnings in your simple dashboard.',

      // FAQ Section
      faq_title: 'Common Questions',
      faq1_question: 'Do I need technical experience?',
      faq1_answer: 'No — just send your menu and we set everything up for you.',
      faq2_question: 'Are there setup fees?',
      faq2_answer: "No, it's completely free during the trial.",
      faq3_question: 'Can I pause orders if the kitchen is busy?',
      faq3_answer: 'Yes, you can pause or resume orders anytime.',
      faq4_question: 'How will I receive orders?',
      faq4_answer:
        "You'll get instant notifications through the restaurant app.",
    },
    ar: {
      hero_title: 'مطعمك في عجمان وتوفّر توصيل؟',
      hero_desc:
        'أكثر من 1000 مستخدم على جوسنِل ينتظرون مطاعم جديدة في الإمارة.\n\nسجّل مجاناً خلال الفترة التجريبية، أضف وجباتك… والباقي علينا.',
      get_started: '👉 ابدأ الآن مجاناً',
      try_demo: '📊 شوف الديمو',
      login: 'تسجيل الدخول',
      what_we_offer: 'شو اللي جوسنيل يقدمه لمطعمك:',
      smart_menu: 'توصلك لزبائن جاهزين للطلب',
      smart_menu_desc:
        'بدون إعلانات وبدون تنافس مع عشرات المطاعم الأخرى في التطبيقات.',
      multilingual: 'تقترح وجباتك مباشرة للزبون بدون منافسة',
      multilingual_desc:
        'الزبون يشوف الوجبات المناسبة له ووجبتك بينها بشكل واضح.',
      zero_setup: 'بدون أي رسوم إعداد أو عقود',
      zero_setup_desc:
        'التسجيل مجاني خلال الفترة التجريبية — وتبدأ تستقبل الطلبات فوراً.',
      real_time: '',
      real_time_desc: '',
      why_love: 'كيف تشتغل جوسنِل',
      increase_orders: '1️⃣ الزبائن يقدمون طلبات جاهزة',
      increase_orders_desc: 'الزبائن يلاقون مطعمك ويقدمون طلبات من التطبيق.',
      reduce_calls: '2️⃣ انت تحضر الأكل',
      reduce_calls_desc: 'بتستقبل إشعارات فورية وتبدأ تحضر الطلبات.',
      global_reach: '3️⃣ انت توصل للزبون',
      global_reach_desc: 'سائق مطعمك يأخذ الطلب ويوصله للعميل.',
      easy_integration: '4️⃣ تتابع أرباحك',
      easy_integration_desc: 'شوف الطلبات اليومية والأرباح في لوحة تحكم بسيطة.',
      features_title: 'أسئلة شائعة',
      menu_translations: 'هل أحتاج خبرة تقنية؟',
      menu_translations_desc:
        'لا — كل شيء جاهز. بس أرسل قائمة الوجبات وإحنا نرتب لك الباقي.',

      cta_section: 'جاهز تبدأ؟',
      cta_desc:
        'ابدأ بإضافة وجباتك اليوم وتواصل مع الزبائن اللي ينتظرون مطاعم جديدة في عجمان.',
      create_account: 'سجّل حسابك الآن — مجاناً خلال الفترة التجريبية',
    },
  };

  const currentText = t[language];

  return (
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
      {/* Header */}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
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
            GoSnel for Vendors
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
              padding: '6px',
              border: '1px solid rgba(78, 205, 196, 0.2)',
              flexDirection: language === 'ar' ? 'row-reverse' : 'row',
            }}
          >
            {[
              { code: 'en', label: 'English' },
              { code: 'ar', label: 'عربي' },
            ].map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                style={{
                  background:
                    language === lang.code ? '#4ECDC4' : 'transparent',
                  color: language === lang.code ? '#062c2a' : '#b0b0b0',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: 6,
                  fontSize: isMobile ? 11 : 12,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  if (language !== lang.code) e.target.style.color = '#4ECDC4';
                }}
                onMouseLeave={(e) => {
                  if (language !== lang.code) e.target.style.color = '#b0b0b0';
                }}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => navigate('/vendor/login')}
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

      {/* Hero Section */}
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
            }}
          >
            {currentText.hero_desc}
          </p>

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
              {currentText.what_we_offer}
            </h3>
            {[
              currentText.smart_menu,
              currentText.multilingual,
              currentText.zero_setup,
              currentText.real_time,
            ]
              .filter((text) => text && text.trim() !== '')
              .map((text, i) => (
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
                  >
                    ✓
                  </div>
                  <span
                    style={{
                      fontSize: isMobile ? 14 : 16,
                      color: '#d0d0d0',
                      textAlign: language === 'ar' ? 'right' : 'left',
                    }}
                  >
                    {text}
                  </span>
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
              onClick={() => navigate('/vendor/signup')}
              style={{
                background: 'linear-gradient(135deg, #4ECDC4, #1A9A93)',
                color: '#062c2a',
                border: 'none',
                padding: isMobile ? '14px 28px' : '16px 40px',
                borderRadius: 12,
                fontSize: isMobile ? 14 : 18,
                fontWeight: 700,
                cursor: 'pointer',
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
                e.target.style.boxShadow = '0 8px 24px rgba(78, 205, 196, 0.3)';
              }}
            >
              {currentText.get_started}
            </button>
          </div>
        </div>

        {/* Hero Message Box */}
        <div
          style={{
            background:
              'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(26, 154, 147, 0.1))',
            border: '1px solid rgba(78, 205, 196, 0.3)',
            borderRadius: 16,
            padding: isMobile ? 24 : 40,
            marginTop: isMobile ? 20 : 0,
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: isMobile ? 16 : 18,
              color: '#e5e7eb',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {currentText.hero_desc}
          </p>
        </div>
      </div>

      {/* Why Partner with GoSnel Section */}
      <div
        style={{
          padding: isMobile ? '40px 20px' : '80px 40px',
          background: 'rgba(255,255,255,0.03)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? 28 : 36,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: isMobile ? 40 : 60,
            color: '#4ECDC4',
          }}
        >
          {currentText.why_partner_title}
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: isMobile ? 20 : 40,
            maxWidth: 1200,
            margin: '0 auto',
          }}
        >
          {[
            {
              title: currentText.reach_customers_title,
              desc: currentText.reach_customers_desc,
              icon: (
                <GroupsIcon
                  style={{ fontSize: isMobile ? 40 : 48, color: '#4ECDC4' }}
                />
              ),
              color: '#4ECDC4',
            },
            {
              title: currentText.earn_money_title,
              desc: currentText.earn_money_desc,
              icon: (
                <VerifiedUserIcon
                  style={{ fontSize: isMobile ? 40 : 48, color: '#ff6b35' }}
                />
              ),
              color: '#ff6b35',
            },
            {
              title: currentText.grow_business_title,
              desc: currentText.grow_business_desc,
              icon: (
                <TrendingUpIcon
                  style={{ fontSize: isMobile ? 40 : 48, color: '#4caf50' }}
                />
              ),
              color: '#4caf50',
            },
          ].map((benefit, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: `1px solid ${benefit.color}40`,
                padding: isMobile ? 24 : 32,
                borderRadius: 16,
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                transform: 'translateY(0)',
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.target.style.transform = 'translateY(-8px)';
                  e.target.style.boxShadow = `0 15px 40px ${benefit.color}20`;
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }
              }}
            >
              <div
                style={{
                  fontSize: isMobile ? 40 : 48,
                  marginBottom: 16,
                }}
              >
                {benefit.icon}
              </div>
              <h4
                style={{
                  fontSize: isMobile ? 18 : 20,
                  fontWeight: 700,
                  marginBottom: 12,
                  color: benefit.color,
                }}
              >
                {benefit.title}
              </h4>
              <p
                style={{
                  fontSize: isMobile ? 13 : 14,
                  color: '#b0b0b0',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div
        style={{
          padding: isMobile ? '40px 20px' : '80px 40px',
          background: 'rgba(255,255,255,0.02)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? 28 : 36,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: isMobile ? 40 : 60,
            color: '#4ECDC4',
          }}
        >
          {currentText.how_it_works_title}
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: isMobile ? 24 : 32,
            maxWidth: 1200,
            margin: '0 auto',
          }}
        >
          {[
            {
              step: '1',
              title: currentText.step1_title,
              desc: currentText.step1_desc,
              color: '#4ECDC4',
            },
            {
              step: '2',
              title: currentText.step2_title,
              desc: currentText.step2_desc,
              color: '#ff6b35',
            },
            {
              step: '3',
              title: currentText.step3_title,
              desc: currentText.step3_desc,
              color: '#4caf50',
            },
            {
              step: '4',
              title: currentText.step4_title,
              desc: currentText.step4_desc,
              color: '#9c27b0',
            },
          ].map((step, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 16,
              }}
            >
              <div
                style={{
                  width: isMobile ? 48 : 56,
                  height: isMobile ? 48 : 56,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isMobile ? 20 : 24,
                  fontWeight: 700,
                  color: '#ffffff',
                  boxShadow: `0 8px 20px ${step.color}40`,
                }}
              >
                {step.step}
              </div>
              <div>
                <h4
                  style={{
                    fontSize: isMobile ? 16 : 18,
                    fontWeight: 600,
                    marginBottom: 8,
                    color: '#ffffff',
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontSize: isMobile ? 12 : 14,
                    color: '#b0b0b0',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div
        style={{
          padding: isMobile ? '40px 20px' : '80px 40px',
          background: 'rgba(255,255,255,0.03)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <h3
          style={{
            fontSize: isMobile ? 28 : 36,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: isMobile ? 40 : 60,
            color: '#4ECDC4',
          }}
        >
          {currentText.faq_title}
        </h3>
        <div
          style={{
            maxWidth: 800,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {[
            {
              question: currentText.faq1_question,
              answer: currentText.faq1_answer,
            },
            {
              question: currentText.faq2_question,
              answer: currentText.faq2_answer,
            },
            {
              question: currentText.faq3_question,
              answer: currentText.faq3_answer,
            },
            {
              question: currentText.faq4_question,
              answer: currentText.faq4_answer,
            },
            {
              question: currentText.faq5_question,
              answer: currentText.faq5_answer,
            },
            {
              question: currentText.faq6_question,
              answer: currentText.faq6_answer,
            },
            {
              question: currentText.faq7_question,
              answer: currentText.faq7_answer,
            },
            {
              question: currentText.faq8_question,
              answer: currentText.faq8_answer,
            },
          ]
            .filter((faq) => faq.question && faq.question.trim() !== '')
            .map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isMobile={isMobile}
              />
            ))}
        </div>
      </div>

      {/* CTA Section */}
      <div
        style={{
          padding: isMobile ? '40px 20px' : '60px 40px',
          textAlign: 'center',
          background: 'rgba(78, 205, 196, 0.05)',
          borderTop: '1px solid rgba(78, 205, 196, 0.2)',
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
          {currentText.cta_section}
        </h3>
        <p
          style={{
            fontSize: isMobile ? 14 : 16,
            color: '#b0b0b0',
            marginBottom: 40,
            maxWidth: 600,
            margin: '0 auto 40px',
            lineHeight: 1.6,
          }}
        >
          {currentText.cta_desc}
        </p>
        <button
          onClick={() => {
            navigate('/vendor/signup');
          }}
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

      {/* Footer */}
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.3)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: isMobile ? '40px 20px' : '60px 40px',
          color: 'rgba(229, 231, 235, 0.9)',
          direction: language === 'ar' ? 'rtl' : 'ltr',
        }}
      >
        {/* Four Column Layout */}
        <div
          style={{
            display: isMobile ? 'block' : 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            gap: isMobile ? 32 : 40,
            marginBottom: 48,
          }}
        >
          {/* Business Navigation */}
          <div>
            <h4
              style={{
                color: '#4ECDC4',
                fontWeight: 600,
                marginBottom: 16,
                fontSize: isMobile ? 13 : 14,
              }}
            >
              Business Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href="/vendor/marketing/why-partner"
                style={{
                  color: 'rgba(229, 231, 235, 0.7)',
                  fontSize: isMobile ? 12 : 13,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  margin: 0,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#4ECDC4';
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(229, 231, 235, 0.7)';
                  e.target.style.textDecoration = 'none';
                }}
              >
                Why Partner with GoSnel
              </a>
              <a
                href="/vendor/marketing/how-it-works"
                style={{
                  color: 'rgba(229, 231, 235, 0.7)',
                  fontSize: isMobile ? 12 : 13,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  margin: 0,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#4ECDC4';
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(229, 231, 235, 0.7)';
                  e.target.style.textDecoration = 'none';
                }}
              >
                How It Works for Restaurants
              </a>
              <a
                href="/vendor/login"
                style={{
                  color: 'rgba(229, 231, 235, 0.7)',
                  fontSize: isMobile ? 12 : 13,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  margin: 0,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#4ECDC4';
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(229, 231, 235, 0.7)';
                  e.target.style.textDecoration = 'none';
                }}
              >
                Vendor Login
              </a>
              <a
                href="https://gosnel.com/vendor/register"
                style={{
                  color: 'rgba(229, 231, 235, 0.7)',
                  fontSize: isMobile ? 12 : 13,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  margin: 0,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#4ECDC4';
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(229, 231, 235, 0.7)';
                  e.target.style.textDecoration = 'none';
                }}
              >
                Register Your Restaurant
              </a>
              <a
                href="/vendor/contact"
                style={{
                  color: 'rgba(229, 231, 235, 0.7)',
                  fontSize: isMobile ? 12 : 13,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  margin: 0,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#4ECDC4';
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(229, 231, 235, 0.7)';
                  e.target.style.textDecoration = 'none';
                }}
              >
                Contact Business Team
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4
              style={{
                color: '#4ECDC4',
                fontWeight: 600,
                marginBottom: 16,
                fontSize: isMobile ? 13 : 14,
              }}
            >
              Resources
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href="/vendor/resources/about-us"
                style={{
                  color: 'rgba(229, 231, 235, 0.7)',
                  fontSize: isMobile ? 12 : 13,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  margin: 0,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#4ECDC4';
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(229, 231, 235, 0.7)';
                  e.target.style.textDecoration = 'none';
                }}
              >
                About Us
              </a>
              <a
                href="/vendor/resources/guidelines"
                style={{
                  color: 'rgba(229, 231, 235, 0.7)',
                  fontSize: isMobile ? 12 : 13,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  margin: 0,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#4ECDC4';
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(229, 231, 235, 0.7)';
                  e.target.style.textDecoration = 'none';
                }}
              >
                Vendor Guidelines
              </a>
              <a
                href="/vendor/resources/analytics"
                style={{
                  color: 'rgba(229, 231, 235, 0.7)',
                  fontSize: isMobile ? 12 : 13,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  margin: 0,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#4ECDC4';
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(229, 231, 235, 0.7)';
                  e.target.style.textDecoration = 'none';
                }}
              >
                Insights & Analytics
              </a>
              <a
                href="/vendor/resources/faq"
                style={{
                  color: 'rgba(229, 231, 235, 0.7)',
                  fontSize: isMobile ? 12 : 13,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  margin: 0,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#4ECDC4';
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(229, 231, 235, 0.7)';
                  e.target.style.textDecoration = 'none';
                }}
              >
                FAQ for Vendors
              </a>
              <p
                style={{
                  color: 'rgba(229, 231, 235, 0.7)',
                  fontSize: isMobile ? 12 : 13,
                  cursor: 'default',
                  margin: 0,
                }}
              >
                Blog
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4
              style={{
                color: '#4ECDC4',
                fontWeight: 600,
                marginBottom: 16,
                fontSize: isMobile ? 13 : 14,
              }}
            >
              Legal
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href="/vendor/legal/terms"
                style={{
                  color: 'rgba(229, 231, 235, 0.7)',
                  fontSize: isMobile ? 12 : 13,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  margin: 0,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#4ECDC4';
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(229, 231, 235, 0.7)';
                  e.target.style.textDecoration = 'none';
                }}
              >
                Vendor Terms & Conditions
              </a>
              <a
                href="/vendor/legal/privacy"
                style={{
                  color: 'rgba(229, 231, 235, 0.7)',
                  fontSize: isMobile ? 12 : 13,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  margin: 0,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#4ECDC4';
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(229, 231, 235, 0.7)';
                  e.target.style.textDecoration = 'none';
                }}
              >
                Privacy Policy
              </a>
              <a
                href="/vendor/legal/cookies"
                style={{
                  color: 'rgba(229, 231, 235, 0.7)',
                  fontSize: isMobile ? 12 : 13,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  margin: 0,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#4ECDC4';
                  e.target.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(229, 231, 235, 0.7)';
                  e.target.style.textDecoration = 'none';
                }}
              >
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                color: '#4ECDC4',
                fontWeight: 600,
                marginBottom: 16,
                fontSize: isMobile ? 13 : 14,
              }}
            >
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <p
                  style={{
                    color: 'rgba(229, 231, 235, 0.5)',
                    fontSize: isMobile ? 11 : 12,
                    margin: 0,
                    marginBottom: 4,
                  }}
                >
                  Location
                </p>
                <p
                  style={{
                    color: 'rgba(229, 231, 235, 0.9)',
                    fontSize: isMobile ? 12 : 13,
                    margin: 0,
                  }}
                >
                  Dubai, United Arab Emirates
                </p>
              </div>
              <div>
                <p
                  style={{
                    color: 'rgba(229, 231, 235, 0.5)',
                    fontSize: isMobile ? 11 : 12,
                    margin: 0,
                    marginBottom: 4,
                  }}
                >
                  Email
                </p>
                <p
                  style={{
                    color: 'rgba(229, 231, 235, 0.9)',
                    fontSize: isMobile ? 12 : 13,
                    margin: 0,
                  }}
                >
                  business@gosnel.com
                </p>
              </div>
              <div>
                <p
                  style={{
                    color: 'rgba(229, 231, 235, 0.5)',
                    fontSize: isMobile ? 11 : 12,
                    margin: 0,
                    marginBottom: 4,
                  }}
                >
                  Phone
                </p>
                <p
                  style={{
                    color: 'rgba(229, 231, 235, 0.9)',
                    fontSize: isMobile ? 12 : 13,
                    margin: 0,
                  }}
                >
                  +971 54 250 3729
                </p>
              </div>

              {/* Social Media */}
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <a
                  href="https://www.instagram.com/gosnelai"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'rgba(78, 205, 196, 0.1)',
                    border: '1px solid rgba(78, 205, 196, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      'rgba(78, 205, 196, 0.3)';
                    e.currentTarget.style.borderColor = '#4ECDC4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      'rgba(78, 205, 196, 0.1)';
                    e.currentTarget.style.borderColor =
                      'rgba(78, 205, 196, 0.3)';
                  }}
                  title="Instagram"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ color: '#4ECDC4' }}
                  >
                    <path d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.067 1.172.054 1.972.244 2.663.520a5.043 5.043 0 0 1 1.823 1.188 5.047 5.047 0 0 1 1.188 1.823c.276.691.466 1.491.52 2.663C23.988 9.638 24 10.012 24 12c0 2.988-.013 3.362-.067 4.534-.054 1.172-.244 1.972-.52 2.663a5.047 5.047 0 0 1-1.188 1.823 5.054 5.054 0 0 1-1.823 1.188c-.691.276-1.491.466-2.663.52C15.362 22.988 14.988 23 12 23c-2.988 0-3.362-.013-4.534-.067-1.172-.054-1.972-.244-2.663-.52a5.043 5.043 0 0 1-1.823-1.188 5.047 5.047 0 0 1-1.188-1.823c-.276-.691-.466-1.491-.52-2.663C.012 15.362 0 14.988 0 12c0-2.988.013-3.362.067-4.534.054-1.172.244-1.972.52-2.663a5.043 5.043 0 0 1 1.188-1.823A5.047 5.047 0 0 1 3.802 1.586c.691-.276 1.491-.466 2.663-.52zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064-2.937 0-3.285.011-4.445.064-1.119.052-1.733.242-2.143.402-.537.209-.921.457-1.321.857-.4.4-.648.784-.857 1.321-.16.41-.35 1.024-.402 2.143-.053 1.16-.064 1.508-.064 4.445 0 2.937.011 3.285.064 4.445.052 1.119.242 1.733.402 2.143.209.537.457.921.857 1.321.4.4.784.648 1.321.857.41.16 1.024.35 2.143.402 1.16.053 1.508.064 4.445.064 2.937 0 3.285-.011 4.445-.064 1.119-.052 1.733-.242 2.143-.402.537-.209.921-.457 1.321-.857.4-.4.648-.784.857-1.321.16-.41.35-1.024.402-2.143.053-1.16.064-1.508.064-4.445 0-2.937-.011-3.285-.064-4.445-.052-1.119-.242-1.733-.402-2.143-.209-.537-.457-.921-.857-1.321-.4-.4-.784-.648-1.321-.857-.41-.16-1.024-.35-2.143-.402zM5.5 12a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0zm1.5 0a5 5 0 1 0 10 0 5 5 0 0 0-10 0zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/gosnel"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'rgba(78, 205, 196, 0.1)',
                    border: '1px solid rgba(78, 205, 196, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      'rgba(78, 205, 196, 0.3)';
                    e.currentTarget.style.borderColor = '#4ECDC4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      'rgba(78, 205, 196, 0.1)';
                    e.currentTarget.style.borderColor =
                      'rgba(78, 205, 196, 0.3)';
                  }}
                  title="LinkedIn"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ color: '#4ECDC4' }}
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/971542503729"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'rgba(78, 205, 196, 0.1)',
                    border: '1px solid rgba(78, 205, 196, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      'rgba(78, 205, 196, 0.3)';
                    e.currentTarget.style.borderColor = '#4ECDC4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      'rgba(78, 205, 196, 0.1)';
                    e.currentTarget.style.borderColor =
                      'rgba(78, 205, 196, 0.3)';
                  }}
                  title="WhatsApp"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    style={{ color: '#4ECDC4' }}
                  >
                    <path d="M16.1,8.9c-3.9,0-7,3.1-7,7c0,1.4,0.4,2.8,1.2,3.9l0.1,0.2l-0.1,0.2l-0.6,2l2-0.6l0.2-0.1l0.2,0.1c1.2,0.8,2.5,1.2,4,1.2    c3.9,0,7-3.1,7-7C23.1,12,20,8.9,16.1,8.9z M19.1,20.6c-4.2,0-7.7-3.4-7.7-7.7c0-0.9,0.8-1.7,1.7-1.7c0.1,0,0.2,0,0.2,0    c0.2,0,0.4,0.1,0.5,0.2l0.5,2.7l-1,0.5c0.6,1.9,2.1,3.5,4,4l0.5-1l0,0l0,0l2.7,0.5c0.1,0.2,0.1,0.3,0.2,0.5c0,0.1,0,0.2,0,0.2    C20.8,19.8,20,20.6,19.1,20.6z M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M16.1,24.8c-1.6,0-3.1-0.4-4.4-1.2l-3.8,1.2L7,25l0.2-0.8    l1.1-3.9C6,16,7.4,10.6,11.7,8.2s9.7-1,12.1,3.3s1,9.7-3.3,12.1C19.2,24.4,17.7,24.8,16.1,24.8L16.1,24.8z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCKOG_phzLcbsNj0MVXCEAfA"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'rgba(78, 205, 196, 0.1)',
                    border: '1px solid rgba(78, 205, 196, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      'rgba(78, 205, 196, 0.3)';
                    e.currentTarget.style.borderColor = '#4ECDC4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      'rgba(78, 205, 196, 0.1)';
                    e.currentTarget.style.borderColor =
                      'rgba(78, 205, 196, 0.3)';
                  }}
                  title="YouTube"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ color: '#4ECDC4' }}
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: 24,
            textAlign: 'center',
          }}
        >
          <p
            style={{
              color: 'rgba(229, 231, 235, 0.5)',
              fontSize: isMobile ? 11 : 12,
              margin: 0,
            }}
          >
            2025 GoSnel. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VendorLanding;
