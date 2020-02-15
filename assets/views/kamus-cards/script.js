$.fn.commentCards = function () {
  // let commentCards = function () {

  return this.each(function () {

    let $this = $(this),
      $cards = $this.find('.card'),
      $current = $cards.filter('.card--current'),
      $next;

    $cards.on('click', function () {
      if (!$current.is(this)) {
        $cards.removeClass('card--current card--out card--next');
        $current.addClass('card--out');
        $current = $(this).addClass('card--current');
        $next = $current.next();
        $next = $next.length ? $next : $cards.first();
        $next.addClass('card--next');
      }
    });

    if (!$current.length) {
      $current = $cards.last();
      $cards.first().trigger('click');
    }

    $this.addClass('cards--active');

  })

};



let test = `
<li class="card">
<h1>Comment Card 3</h1>

<p>Donec nunc ligula, vulputate quis mollis eu, interdum quis libero. Donec nulla ante, facilisis sit amet
  vulputate at, tincidunt a velit. Maecenas vestibulum, nulla sed tincidunt viverra, lorem turpis aliquam urna, ut
  pretium orci purus consequat augue. Etiam a enim orci, vitae pulvinar odio. In elit urna, tincidunt a
  pellentesque et, scelerisque at nibh. Sed nec est sapien. Aliquam ullamcorper eros eu quam ultrices vel faucibus
  eros interdum. Etiam mattis eleifend sapien, eu iaculis massa feugiat sed. Aliquam erat volutpat. Vivamus
  facilisis ultricies eros, a pretium purus mollis id. Sed dapibus elit ut neque rutrum dignissim. Nulla eros
  nisl, venenatis quis rhoncus sit amet, molestie nec nisl. Pellentesque vel neque sapien, et sagittis nulla.</p>

</li>
<li class="card">
<h1>Comment Card 4</h1>

<p>Donec nunc ligula, vulputate quis mollis eu, interdum quis libero. Donec nulla ante, facilisis sit amet
  vulputate at, tincidunt a velit. Maecenas vestibulum, nulla sed tincidunt viverra, lorem turpis aliquam urna, ut
  pretium orci purus consequat augue. Etiam a enim orci, vitae pulvinar odio. In elit urna, tincidunt a
  pellentesque et, scelerisque at nibh. Sed nec est sapien. Aliquam ullamcorper eros eu quam ultrices vel faucibus
  eros interdum. Etiam mattis eleifend sapien, eu iaculis massa feugiat sed. Aliquam erat volutpat. Vivamus
  facilisis ultricies eros, tincidunt a velit. Maecenas vestibulum, nulla sed tincidunt viverra, lorem turpis
  aliquam urna, ut
  pretium orci purus consequat augue. Etiam a enim orci, vitae pulvinar odio. In elit urna, tincidunt a
  pellentesque et,a pretium purus mollis id. Sed dapibus elit ut neque rutrum dignissim. Nulla eros
  nisl, venenatis quis rhoncus sit amet, molestie nec nisl. Pellentesque vel neque sapien, et sagittis nulla.</p>

</li>

<li class="card">
<h1>Comment Card 5</h1>

<p>Donec nunc ligula, vulputate quis mollis eu, interdum quis libero. Donec nulla ante, facilisis sit amet
  vulputate at, tincidunt a velit. Maecenas vestibulum, nulla sed tincidunt viverra, lorem turpis aliquam urna, ut
  pretium orci purus consequat augue. Etiam a enim orci, vitae pulvinar odio. In elit urna, tincidunt a
  pellentesque et, scelerisque at nibh. Sed nec est sapien. Aliquam ullamcorper eros eu quam ultrices vel faucibus
  eros interdum. Etiam mattis eleifend sapien, eu iaculis massa feugiat sed. Aliquam erat volutpat. Vivamus
  facilisis ultricies eros, a pretium purus mollis id. Sed dapibus elit ut neque rutrum dignissim. Nulla eros
  nisl, venenatis quis rhoncus sit amet, molestie nec nisl. Pellentesque vel neque sapien, et sagittis nulla.</p>

</li>
`;

// $('.cards').append(test);