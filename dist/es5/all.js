"use strict";

$(document).ready(function () {
  var section_one = "<section>\n                        <article>\n                            <div id=\"article_image\">\n                                <img src=\"./images/dose-media-bU6JyhSI6zo-unsplash.jpg\" alt=\"\">\n                            </div>\n                            <div id=\"article_info\">\n                                <h2>\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A</h2>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quos nostrum natusrepudiandae fuga inventore ullam culpa recusandae suscipit repellendus vero, asperiores vel assumenda ipsum! Corrupti, excepturi. Accusantium, officia omnis?</p>\n                            </div>\n                        </article>\n                      </section>\n                      <section>\n                        <article>\n                            <div id=\"article_image\">\n                                <img src=\"./images/dose-media-bU6JyhSI6zo-unsplash.jpg\" alt=\"\">\n                            </div>\n                            <div id=\"article_info\">\n                                <h2>\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A</h2>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quos nostrum natusrepudiandae fuga inventore ullam culpa recusandae suscipit repellendus vero, asperiores vel assumenda ipsum! Corrupti, excepturi. Accusantium, officia omnis?</p>\n                            </div>\n                        </article>\n                      </section>";
  var section_two = "<section>\n                        <article>\n                            <div id=\"article_image\">\n                                <img src=\"./images/dose-media-bU6JyhSI6zo-unsplash.jpg\" alt=\"\">\n                            </div>\n                            <div id=\"article_info\">\n                                <h2>\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A</h2>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quos nostrum natusrepudiandae fuga inventore ullam culpa recusandae suscipit repellendus vero, asperiores vel assumenda ipsum! Corrupti, excepturi. Accusantium, officia omnis?</p>\n                            </div>\n                        </article>\n                      </section>";
  var section_three = '<section class="contact"><h3>Внимание</h3><p>Оставьте ваши контактные данные <br/>и наш консультант свяжется с вами</p><form id="application" action="application.php" method="POST" name="application "><input name="name" id="applicationName" maxlength="20" placeholder="Введите ваше имя" required /><input name="email" type="email" id="applicationEmail" maxlength="30" placeholder="Введите ваш E-mail" required/><input name="telephone" type="Tel" id="applicationTelephone" maxlength="20" placeholder="Введите ваш телефон" required /><button class="applicationButton" type="submit" form="application"> Оставить заявку </button></form></section>';
  $('#link_main_one').click(function () {
    $('section').detach();
    $('main').append(section_one);
    $('li a').removeClass('active');
    $(this).addClass('active');
  });
  $('#link_main_two').click(function () {
    $('section').detach();
    $('main').append(section_two);
    $('li a').removeClass('active');
    $(this).addClass('active');
  });
  $('#link_main_three').click(function () {
    $('section').detach();
    $('main').append(section_three);
    $('li a').removeClass('active');
    $(this).addClass('active');
  });
});
//# sourceMappingURL=all.js.map
