function loadLanguage(b){var a;if(b&&b.length>0){a=b.slice(0,2)}else{a=$.i18n.browserLang()}$.i18n.properties({name:"lang",path:"/jxweb/i18n/",mode:"both",language:a,cache:false,encoding:"UTF-8",callback:function(){initUILang(a)}})}function getLangString(b){var a=$.i18n.prop(b);if(a=="["+b+"]"&&parent!=window){a=parent.$.i18n.prop(b)}return a}function getI18n(a){return osgiI18n[a]};