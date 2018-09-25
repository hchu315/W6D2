class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
    this.player = 1;
  }

  bindEvents() {
    // Install click handlers on the li elements.
    $("li").on("click", event => {
      const $square = $(event.currentTarget);
      // $square.text("X");
      this.makeMove($square);
      
      const pos = $square.data("pos");

      // alert(`${pos} is chosen!`);
      
      const listItems = document.querySelectorAll("li");
      
      for(let i = 0; i < 9; i = i+3) {
        if ((listItems[i].textContent === "X") && (listItems[i+1].textContent === "X") && (listItems[i+2].textContent === "X")) {
          const $ul = $("ul");
          $ul.children().attr("style", "background-color:white;font-size:50px;font-weight:800;font-family:sans-serif;");
          $( "li" ).slice(i,i+3).css( "background-color", "green" );
          // const $ul = $("ul");
          // $ul.children().attr("style", "background-color:white;font-size:50px;font-weight:800;font-family:sans-serif;");

          // $one.css("background-color", "green"); 
          
        }
      }
      
      for(let i = 0; i < 3; i++) {
        if ((listItems[i].textContent === "X") && (listItems[i+3].textContent === "X") && (listItems[i+6].textContent === "X")) {
          const $ul = $("ul");
          $ul.children().attr("style", "background-color:white;font-size:50px;font-weight:800;font-family:sans-serif;");
          $( "li" ).slice(i,i+1).css( "background-color", "green" );
          $( "li" ).slice(i+3,i+4).css( "background-color", "green" );
          $( "li" ).slice(i+6,i+7).css( "background-color", "green" );
        }
      }
      
      if ((listItems[0].textContent === "X") && (listItems[4].textContent === "X") && (listItems[8].textContent === "X")) {
        const $ul = $("ul");
        $ul.children().attr("style", "background-color:white;font-size:50px;font-weight:800;font-family:sans-serif;");
        $( "li" ).slice(0,1).css( "background-color", "green" );
        $( "li" ).slice(4,5).css( "background-color", "green" );
        $( "li" ).slice(8,9).css( "background-color", "green" );
      }
      if ((listItems[2].textContent === "X") && (listItems[4].textContent === "X") && (listItems[6].textContent === "X")) {
        const $ul = $("ul");
        $ul.children().attr("style", "background-color:white;font-size:50px;font-weight:800;font-family:sans-serif;");
        $( "li" ).slice(2,3).css( "background-color", "green" );
        $( "li" ).slice(4,5).css( "background-color", "green" );
        $( "li" ).slice(6,7).css( "background-color", "green" );
      }
      
    });
  }

  makeMove($square) {
    $square.css("background-color", "white");
    
    if (this.player === 1) {
      $square.text("X");
    } else {
      $square.text("O");
    }
    
    $square.css("font-size", "50px");
    $square.css("font-weight", "800");
    $square.css("font-family", "sans-serif");
    const $listItems = $("li");
    
    this.player = -this.player;
    

    // for (let i = 0; i < listItems.length; i++) {
    //   alert(listItems[i].textContent);
    // }
    
    // for (let row = 0; row < 3; row++) {
    //   const $one = $listItems[0];
    //   const $two = $listItems[1];
    //   const $three = $listItems[2];
    //   if (($one.data("val") == $two.data("val")) && ($two.data("val") == $three.data("val"))) {
    //     alert("You win!");
    //   }
    // }
  }

  setupBoard() {
    const $ul = $("<ul>");
    
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const $li = $("<li>");
        
        $li.data("pos", [row,col]);
        $ul.append($li);
          
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
