export class I18nService {

  defaultLanguage: string;
  supportedLanguages: string[];

  constructor(
    private translateService: TranslateService,
    private cookieService: CookieService
  ) {}

  init(environment: any, translations: any[] ) {
    translations.forEach(translation => {
        this.translateService.setTranslation(translation.langCode, translation.object);
    })
    this.setLanguage(environment.defaultLanguage, environment.supportedLanguages);
  }

  private setLanguage(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;

    // On init, the language set in cookie is prioritized
    this.translateService.use(this.cookieService.get('lang-preference') || defaultLanguage);
  }
}
