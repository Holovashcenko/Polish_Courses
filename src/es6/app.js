
$( document ).ready(function() {

    let section_one = `<section>
                        <article>
                            <div id="article_image">
                                <img src="./images/dose-media-bU6JyhSI6zo-unsplash.jpg" alt="">
                            </div>
                            <div id="article_info">
                                <h2>Заголовок</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quos nostrum natusrepudiandae fuga inventore ullam culpa recusandae suscipit repellendus vero, asperiores vel assumenda ipsum! Corrupti, excepturi. Accusantium, officia omnis?</p>
                            </div>
                        </article>
                      </section>
                      <section>
                        <article>
                            <div id="article_image">
                                <img src="./images/dose-media-bU6JyhSI6zo-unsplash.jpg" alt="">
                            </div>
                            <div id="article_info">
                                <h2>Заголовок</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quos nostrum natusrepudiandae fuga inventore ullam culpa recusandae suscipit repellendus vero, asperiores vel assumenda ipsum! Corrupti, excepturi. Accusantium, officia omnis?</p>
                            </div>
                        </article>
                      </section>`;
                      
    let section_two = `<section>
                        <article>
                            <div id="article_image">
                                <img src="./images/dose-media-bU6JyhSI6zo-unsplash.jpg" alt="">
                            </div>
                            <div id="article_info">
                                <h2>Заголовок</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quos nostrum natusrepudiandae fuga inventore ullam culpa recusandae suscipit repellendus vero, asperiores vel assumenda ipsum! Corrupti, excepturi. Accusantium, officia omnis?</p>
                            </div>
                        </article>
                      </section>`;
    let section_three = '<section class="contact"><h3>Внимание</h3><p>Оставьте ваши контактные данные <br/>и наш консультант свяжется с вами</p><form id="application" action="application.php" method="POST" name="application "><input name="name" id="applicationName" maxlength="20" placeholder="Введите ваше имя" required /><input name="email" type="email" id="applicationEmail" maxlength="30" placeholder="Введите ваш E-mail" required/><input name="telephone" type="Tel" id="applicationTelephone" maxlength="20" placeholder="Введите ваш телефон" required /><button class="applicationButton" type="submit" form="application"> Оставить заявку </button></form></section>';
    
    $( '#link_main_one' ).click(function() {
        $('section').detach();
        $( 'main' ).append(section_one);
        $('li a').removeClass('active');
        $(this).addClass('active');
    });

    $( '#link_main_two' ).click(function() {
        $('section').detach();
        $( 'main' ).append(section_two);
        $('li a').removeClass('active');
        $(this).addClass('active');
    });

    $( '#link_main_three' ).click(function() {
        $('section').detach();
        $( 'main' ).append(section_three);
        $('li a').removeClass('active');
        $(this).addClass('active');
    });
});