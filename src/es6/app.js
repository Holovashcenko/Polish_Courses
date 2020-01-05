
$( document ).ready(function() {

    $( '#link_main_one' ).click(function() {
        console.log('hello 1');
        $( '#link_main_two' ).on();
        $('section').detach();
        $( 'main' ).append('<section><article><div id="article_image"><img src="./images/dose-media-bU6JyhSI6zo-unsplash.jpg" alt=""></div><div id="article_info"><h2>Заголовок</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quos nostrum natusrepudiandae fuga inventore ullam culpa recusandae suscipit repellendus vero, asperiores vel assumenda ipsum! Corrupti, excepturi. Accusantium, officia omnis?</p></div></article></section><section><article><div id="article_image"><img src="./images/dose-media-bU6JyhSI6zo-unsplash.jpg" alt=""></div><div id="article_info"><h2>Заголовок</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quos nostrum natusrepudiandae fuga inventore ullam culpa recusandae suscipit repellendus vero, asperiores vel assumenda ipsum! Corrupti, excepturi. Accusantium, officia omnis?</p></div></article></section>');
        $( '#link_main_one' ).off();
    });

    $( '#link_main_two' ).click(function() {
        console.log('hello 2');
        $( '#link_main_one' ).on();
        $('section').detach();
        $( 'main' ).append('<section><article><div id="article_image"><img src="./images/dose-media-bU6JyhSI6zo-unsplash.jpg" alt=""></div><div id="article_info"><h2>Заголовок Описание</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quos nostrum natusrepudiandae fuga inventore ullam culpa recusandae suscipit repellendus vero, asperiores vel assumenda ipsum! Corrupti, excepturi. Accusantium, officia omnis?</p></div></article></section>');
        $( '#link_main_two' ).off();
    });

    $( '#link_main_three' ).click(function() {
        console.log('hello 3');
    });
});