(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: '. . .',
      images: [
        {
          full: 'http://upload.wikimedia.org/wikipedia/commons/3/36/GreatDodecahedron.gif'
        }
      ],
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: '. . .',
      images: [
        {
          full: 'http://upload.wikimedia.org/wikipedia/commons/3/36/GreatDodecahedron.gif'
        }
      ],
      canPurchase: false,
      soldOut: false
    }
  ];
})();
