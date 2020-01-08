"use strict";

$(document).ready(function () {
  var section_one = "<section>\n                        <article>\n                            <div id=\"article_image\">\n                                <img src=\"./images/dose-media-bU6JyhSI6zo-unsplash.jpg\" alt=\"\">\n                            </div>\n                            <div id=\"article_info\">\n                                <h2>\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A</h2>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quos nostrum natusrepudiandae fuga inventore ullam culpa recusandae suscipit repellendus vero, asperiores vel assumenda ipsum! Corrupti, excepturi. Accusantium, officia omnis?</p>\n                            </div>\n                        </article>\n                      </section>\n                      <section>\n                        <article>\n                            <div id=\"article_image\">\n                                <img src=\"./images/dose-media-bU6JyhSI6zo-unsplash.jpg\" alt=\"\">\n                            </div>\n                            <div id=\"article_info\">\n                                <h2>\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A</h2>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quos nostrum natusrepudiandae fuga inventore ullam culpa recusandae suscipit repellendus vero, asperiores vel assumenda ipsum! Corrupti, excepturi. Accusantium, officia omnis?</p>\n                            </div>\n                        </article>\n                      </section>";
  var section_two = "<section>\n                        <article>\n                            <div id=\"article_image\">\n                                <img src=\"./images/dose-media-bU6JyhSI6zo-unsplash.jpg\" alt=\"\">\n                            </div>\n                            <div id=\"article_info\">\n                                <h2>\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A</h2>\n                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quos nostrum natusrepudiandae fuga inventore ullam culpa recusandae suscipit repellendus vero, asperiores vel assumenda ipsum! Corrupti, excepturi. Accusantium, officia omnis?</p>\n                            </div>\n                        </article>\n                      </section>";
  var section_three = "<section class=\"contact\">\n                            <h3>\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435</h3>\n                            <p>\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0432\u0430\u0448\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 <br/>\u0438 \u043D\u0430\u0448 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438</p>\n                            <form id=\"application\" action=\"application.php\" method=\"POST\" name=\"application \">\n                                <input name=\"name\" id=\"applicationName\" maxlength=\"20\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F\" required />\n                                <input name=\"email\" type=\"email\" id=\"applicationEmail\" maxlength=\"30\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 E-mail\" required/>\n                                <input name=\"telephone\" type=\"Tel\" id=\"applicationTelephone\" maxlength=\"20\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\" required />\n                                <button class=\"applicationButton\" type=\"submit\" form=\"application\"> \u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 </button>\n                            </form>\n                        </section>";
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
