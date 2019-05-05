'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">js44d documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/FourDModule.html" data-type="entity-link">FourDModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FourDModule-2be9f82e49a37269302603af365cf991"' : 'data-target="#xs-injectables-links-module-FourDModule-2be9f82e49a37269302603af365cf991"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FourDModule-2be9f82e49a37269302603af365cf991"' :
                                        'id="xs-injectables-links-module-FourDModule-2be9f82e49a37269302603af365cf991"' }>
                                        <li class="link">
                                            <a href="injectables/FourDCollection.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FourDCollection</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FourDInterface.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FourDInterface</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FourDModel.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FourDModel</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JS44DModule.html" data-type="entity-link">JS44DModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JS44DModule-4a32183bae28e96fa9fb03dda4f9b043"' : 'data-target="#xs-components-links-module-JS44DModule-4a32183bae28e96fa9fb03dda4f9b043"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JS44DModule-4a32183bae28e96fa9fb03dda4f9b043"' :
                                            'id="xs-components-links-module-JS44DModule-4a32183bae28e96fa9fb03dda4f9b043"' }>
                                            <li class="link">
                                                <a href="components/AdvancedQueryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdvancedQueryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataGrid.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DataGrid</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FourDDropDown.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FourDDropDown</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FourDRegistryInput.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FourDRegistryInput</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListSelectorDialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListSelectorDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginCmp.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginCmp</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QueryBand.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QueryBand</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuickFindInput.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuickFindInput</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecordEditWindow.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RecordEditWindow</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecordList.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RecordList</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Tab.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Tabs.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tabs</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WebAppContainer.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WebAppContainer</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-JS44DModule-4a32183bae28e96fa9fb03dda4f9b043"' : 'data-target="#xs-directives-links-module-JS44DModule-4a32183bae28e96fa9fb03dda4f9b043"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-JS44DModule-4a32183bae28e96fa9fb03dda4f9b043"' :
                                        'id="xs-directives-links-module-JS44DModule-4a32183bae28e96fa9fb03dda4f9b043"' }>
                                        <li class="link">
                                            <a href="directives/CustomButtonBarDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomButtonBarDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-JS44DModule-4a32183bae28e96fa9fb03dda4f9b043"' : 'data-target="#xs-injectables-links-module-JS44DModule-4a32183bae28e96fa9fb03dda4f9b043"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JS44DModule-4a32183bae28e96fa9fb03dda4f9b043"' :
                                        'id="xs-injectables-links-module-JS44DModule-4a32183bae28e96fa9fb03dda4f9b043"' }>
                                        <li class="link">
                                            <a href="injectables/FourDInterface.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FourDInterface</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-JS44DModule-4a32183bae28e96fa9fb03dda4f9b043"' : 'data-target="#xs-pipes-links-module-JS44DModule-4a32183bae28e96fa9fb03dda4f9b043"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-JS44DModule-4a32183bae28e96fa9fb03dda4f9b043"' :
                                            'id="xs-pipes-links-module-JS44DModule-4a32183bae28e96fa9fb03dda4f9b043"' }>
                                            <li class="link">
                                                <a href="pipes/Base64ImageRef.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Base64ImageRef</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FourDDateToString.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FourDDateToString</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalModule.html" data-type="entity-link">ModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalModule-924b6826caff3843a662fac899c92dab"' : 'data-target="#xs-components-links-module-ModalModule-924b6826caff3843a662fac899c92dab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalModule-924b6826caff3843a662fac899c92dab"' :
                                            'id="xs-components-links-module-ModalModule-924b6826caff3843a662fac899c92dab"' }>
                                            <li class="link">
                                                <a href="components/OKOnlyModal.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OKOnlyModal</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/YesNoModal.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">YesNoModal</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ModalModule-924b6826caff3843a662fac899c92dab"' : 'data-target="#xs-injectables-links-module-ModalModule-924b6826caff3843a662fac899c92dab"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ModalModule-924b6826caff3843a662fac899c92dab"' :
                                        'id="xs-injectables-links-module-ModalModule-924b6826caff3843a662fac899c92dab"' }>
                                        <li class="link">
                                            <a href="injectables/Modal.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>Modal</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ModalDialogInstance.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ModalDialogInstance</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Base64.html" data-type="entity-link">Base64</a>
                            </li>
                            <li class="link">
                                <a href="classes/Deferred.html" data-type="entity-link">Deferred</a>
                            </li>
                            <li class="link">
                                <a href="classes/FourDQuery.html" data-type="entity-link">FourDQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/ICustomModal.html" data-type="entity-link">ICustomModal</a>
                            </li>
                            <li class="link">
                                <a href="classes/ICustomModalComponent.html" data-type="entity-link">ICustomModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/MD5.html" data-type="entity-link">MD5</a>
                            </li>
                            <li class="link">
                                <a href="classes/OKOnlyContent.html" data-type="entity-link">OKOnlyContent</a>
                            </li>
                            <li class="link">
                                <a href="classes/Utf8.html" data-type="entity-link">Utf8</a>
                            </li>
                            <li class="link">
                                <a href="classes/YesNoModalContent.html" data-type="entity-link">YesNoModalContent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ModalConfig.html" data-type="entity-link">ModalConfig</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IFieldDescription.html" data-type="entity-link">IFieldDescription</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});