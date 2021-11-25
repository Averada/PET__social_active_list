import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      pages: {
        auth: {
          title: 'Привет, с возвращением!',
          sub: 'Введите свои данные ниже.',
          create: 'Создать',
          q: 'Нет учетной записи?',
          remember: 'Запомнить меня',
          or: 'ИЛИ',
        },
        reg: {
          title: 'Начни абсолютно бесплатно.',
          sub: 'Бесплатно навсегда. Кредитная карта не требуется.',
          login: 'Войти',
          q: 'Уже есть аккаунт?',
          warning: 'Регистрируясь, я принимаю',
          politic: 'Политику конфиденциальности',
        },
        goals: {
          head: 'Цели',
          title: 'Список целей',
        },
        recommend: {
          head: 'Рекомендации',
          title: 'C этими пользователями совпадают списки целей',
          header: {
            reports: 'Отчеты',
            name: 'Ник',
            percent: 'Процент',
            status: 'Статус',
          },
          sub: 'Subscribe',
          unsub: 'Unsubscribe',
        },
        top: {
          head: 'Топ',
          title: 'Самые популярные отчеты',
        },
        timeline: {
          title: 'Лента',
        },
        profile: {
          head: 'Профиль',
          stat: {
            usertasks: 'Ваши цели',
            userreports: 'Ваши отчеты',
            alltasks: 'Всего целей',
            allreports: 'Всего отчетов',
          },
          sub: 'Подписаться',
          unsub: 'Отписаться',
          message: 'Сообщение',
          add: 'Добавить',
          tabs: {
            mytask: 'Мои таски',
            myreports: 'Мои отчеты',
            mysub: 'Мои подписки',
            task: 'Таски',
            reports: 'Отчеты',
            sub: 'Подписки',
            nosub: 'Нет подписок',
            notasks: 'Нет целей',
            noreports: 'Нет отчетов',
          },
        },
      },
      form: {
        login_submit: 'Войти',
        register_submit: 'Зарегистрироваться',
        email: 'Электронная почта',
        first_name: 'Имя',
        last_name: 'Фамилия',
        nickname: 'Никнейм',
        password: 'Пароль',
        password_confirm: 'Подтвердите пароль',
        forgot_password: 'Забыли пароль?',
      },
      report: {
        head: 'Отчеты',
        textarea: 'Подробное описание',
        title: 'Создать отчет о выполнении цели',
        form_button: 'Отправить',
      },
      sideBar: {
        notFound: 'Cтраница не найдена',
        registration: 'Регистрация',
        login: 'Вход',
        top: 'Топ',
        chat: 'Сообщения',
        lenta: 'Лента',
        subscribe: 'Рекомендации',
        tasks: 'Цели',
        profile: 'Профиль',
      },
      chat: {
        errorMessage: 'Сообщение не отправлено'
      }
    },
  },
  en: {
    translation: {
      pages: {
        auth: {
          title: 'Hello, welcome back!',
          sub: 'Enter your info below.',
          create: 'Create',
          q: "Don't have an account?",
          remember: 'Remember me',
          or: 'OR',
        },
        reg: {
          title: 'Get started absolutely free.',
          sub: 'Free forever. No credit card required.',
          login: 'Log in',
          q: 'Have an account?',
          warning: 'By registering I accept',
          politic: 'Privacy policy',
        },
        goals: {
          head: 'Goals',
          title: 'Goal list',
        },
        recommend: {
          head: 'Recommended',
          title: 'These users have the same goal lists',
          header: {
            reports: 'Reports',
            name: 'Nickname',
            percent: 'Percent',
            status: 'Status',
          },
          sub: 'Subscribe',
          unsub: 'Unsubscribe',
        },
        top: {
          head: 'Top',
          title: 'Most popular reports',
        },
        timeline: {
          title: 'Timeline',
        },
        profile: {
          head: 'Profile',
          stat: {
            usertasks: 'Your goals',
            userreports: 'Your reports',
            alltasks: 'Total goals',
            allreports: 'Total reports',
          },
          sub: 'Subscribe',
          unsub: 'Unsubscribe',
          message: 'Message',
          add: 'Add',
          tabs: {
            mytask: 'My goals',
            myreports: 'My reports',
            mysub: 'My subscriptions',
            task: 'Goals',
            reports: 'Reports',
            sub: 'Subscriptions',
            nosub: 'No subscriptions',
            notasks: 'No tasks',
            noreports: 'No reports',
          },
        },
      },
      form: {
        login_submit: 'Log in',
        register_submit: 'Register now',
        email: 'Email',
        first_name: 'Name',
        last_name: 'Surname',
        nickname: 'Nickname',
        password: 'password',
        password_confirm: 'Confirm the password',
        forgot_password: 'Forgot your password?',
      },
      report: {
        head: 'Report',
        textarea: 'Detailed',
        title: 'Create goal completion report',
        form_button: 'Send',
      },
      sideBar: {
        notFound: 'Page not found',
        registration: 'Registration',
        login: 'Log in',
        top: 'Top',
        chat: 'Messages',
        lenta: 'Timeline',
        subscribe: 'Recommended',
        tasks: 'Goals',
        profile: 'Profile',
      },
    },
  },
  fr: {
    translation: {
      pages: {
        auth: {
          title: 'Bonjour, bon retour !',
          sub: 'Entrez vos informations ci-dessous.',
          create: 'Créer',
          q: "Vous n'avez pas de compte ?",
          remember: 'Souviens-toi de moi',
          or: 'OU',
        },
        reg: {
          title: 'Commencez tout à fait gratuitement.',
          sub: 'Libre pour toujours. Pas de carte de crédit nécessaire.',
          login: 'Connexion',
          q: 'Avoir un compte?',
          warning: "En m'inscrivant j'accepte",
          politic: 'Politique de confidentialité',
        },
        goals: {
          title: 'Все цели',
        },
      },
      form: {
        login_submit: 'Connexion',
        register_submit: "S'inscrire",
        email: 'Email',
        first_name: 'Nom',
        last_name: 'Nom de famille',
        nickname: 'Surnom',
        password: 'le mot de passe',
        password_confirm: 'Confirmer le mot de passe',
        forgot_password: 'Mot de passe oublié?',
      },
      report: {
        textarea: 'Détaillé',
        title: "Créer un rapport d'achèvement des objectifs",
        form_button: 'Envoyer',
      },
      sideBar: {
        notFound: 'Page non trouvée',
        registration: 'Inscription',
        login: 'Connexion',
        top: 'Top',
        chat: 'Messages',
        lenta: 'Chronologie',
        subscribe: 'Conseillé',
        tasks: 'Buts',
        profile: 'Profil',
      },
    },
  },
  buryat: {
    translation: {
      pages: {
        auth: {
          title: 'Сайн уу, эргэн тавтай морил!',
          sub: 'Доор дэлгэрэнгүй мэдээллээ оруулна уу.',
          create: 'Үүсгэх',
          q: "Бүртгэлгүй юу?",
          remember: 'Намайг санаарай',
          or: 'ЭСВЭЛ',
        },
        reg: {
          title: 'Үнэгүй эхлээрэй.',
          sub: 'Үүрд ​​чөлөөтэй. Зээлийн карт шаардлагагүй.',
          login: 'Орох гэж',
          q: 'Бүртгэлтэй юу?',
          warning: "Бүртгүүлснээр би зөвшөөрч байна",
          politic: 'Нууцлалын бодлого',
        },
        goals: {
          title: 'Бүх зорилго',
        },
      },
      form: {
        login_submit: 'Орох гэж',
        register_submit: "Яг одоо бүртгүүл",
        email: 'Имэйл',
        first_name: 'Нэр',
        last_name: 'Овог',
        nickname: 'Хоч',
        password: 'Нууц үг',
        password_confirm: 'Нууц үгээ баталгаажуулна уу',
        forgot_password: 'Нууц үгээ мартсан?',
      },
      report: {
        textarea: 'Дэлгэрэнгүй тодорхойлолт',
        title: "Зорилго гүйцэтгэлийн тайланг үүсгэх",
        form_button: 'Илгээх',
      },
      sideBar: {
        notFound: 'Хуудас олдсонгүй',
        registration: 'Бүртгэл',
        login: 'Орц',
        top: 'Топ',
        chat: 'Бичлэгүүд',
        lenta: 'тууз',
        subscribe: 'Зөвлөмж',
        tasks: 'Зорилго',
        profile: 'Профайл',
      },
    },
  },
  korean: {
    translation: {
      pages: {
        auth: {
          title: '안녕하세요, 다시 오신 것을 환영합니다!',
          sub: '아래에 세부정보를 입력하세요.',
          create: '창조하다',
          q: "계정이 없으신가요?",
          remember: 'Н날 기억해',
          or: '또는',
        },
        reg: {
          title: '완전 무료로 시작하세요.',
          sub: '영원히 무료입니다. 신용 카드가 필요하지 않습니다.',
          login: '안으로',
          q: '이미 계정이 있습니까?',
          warning: "Б등록함으로써 동의합니다",
          politic: '개인 정보 정책',
        },
        goals: {
          title: '목표 목록',
        },
      },
      form: {
        login_submit: '안으로',
        register_submit: "지금 등록하세요",
        email: '이메일',
        first_name: '이름',
        last_name: '성',
        nickname: '별명',
        password: '비밀번호',
        password_confirm: '비밀번호 확인',
        forgot_password: '비밀번호를 잊어 버렸습니까?',
      },
      report: {
        textarea: '상세 설명',
        title: "목표 완료 보고서 생성",
        form_button: '보내다',
      },
      sideBar: {
        notFound: '페이지를 찾을 수 없음',
        registration: '등록',
        login: '입구',
        top: '맨 위',
        chat: '게시물',
        lenta: '리본',
        subscribe: '권장 사항',
        tasks: '목표',
        profile: '프로필',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
