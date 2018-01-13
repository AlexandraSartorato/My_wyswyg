$.fn.my_wysiwyg = function( options ) {


    // Iterate and reformat each matched element.
    return this.each(function() {
        var parent = $( this ).parent();
        var menu = parent.prepend('<div class="nav"></div>');
        var editor = parent.append('<div id="textarea" contenteditable="true"></div>');
        parent.find('.nav').append('<button type="button" class="left"><i class="fa fa-align-left" aria-hidden="true"></i></button>');
        parent.find('.nav').append('<button type="button" class="center"><i class="fa fa-align-center" aria-hidden="true"></i></button>');
        parent.find('.nav').append('<button type="button" class="right"><i class="fa fa-align-right" aria-hidden="true"></i></button>');
      parent.find('.nav').append('<button type="button" class="justify"><i class="fa fa-align-justify" aria-hidden="true"></i></button>');
        parent.find('.nav').append('<button type="button" class="bold"><i class="fa fa-bold" aria-hidden="true"></i></button>');
        parent.find('.nav').append('<button type="button" class="italic"><i class="fa fa-italic" aria-hidden="true"></i></button>');
      parent.find('.nav').append('<select class="text_size"><option value="7">52px</option><option value="6">48px</option><option value="5">32px</option><option value="4">24px</option><option value="3">12px</option><option value="2">10px</option><option value="1">8px</option></select>');
        parent.find('.nav').append('<input type="color" class="color">');
        parent.find('.nav').append('<button type="button"><i class="fa fa-link" aria-hidden="true"></i></button>');
        parent.find('.nav').append('<button type="button" class="biggersize"><i class="fa fa-plus-square-o" aria-hidden="true"></i></button>');
        parent.find('.nav').append('<button type="button" class="smallersize"><i class="fa fa-minus-square-o" aria-hidden="true"></i></button>');
        parent.find('.nav').append('<button type="button" class="underline"><i class="fa fa-underline" aria-hidden="true"></i></button>');
         parent.find('.nav').append('<button type="button" class="strikethrough"><i class="fa fa-strikethrough" aria-hidden="true"></i></button>');


        parent.find('.left').click(function() {
     document.execCommand('justifyLeft', false, null);
      });

      parent.find('.right').click(function() {
      document.execCommand('justifyRight', false, null);
    });

    parent.find('.center').click(function() {
      document.execCommand('justifyCenter', false, null);
  });

  parent.find('.justify').click(function() {
    document.execCommand('justifyFull', false, null);
    });
    parent.find('.bold').click(function() {
    document.execCommand('bold', false, null);
      });

      parent.find('.italic').click(function() {
      document.execCommand('italic', false, null);
          });

          parent.find('.smallersize').click(function() {
          document.execCommand('italic', false, null);
              });

      parent.find('.text_size').click(function() {
      document.execCommand('fontSize', false, $('.text_size').val());
            });

      parent.find('.color').change(function() {
      document.execCommand('foreColor', false, $('.color').val());
          });

    parent.find('.underline').click(function() {
    document.execCommand('underline', false, null);
      });
    parent.find('.strikethrough').click(function() {
    document.execCommand('strikeThrough', false, null);
      });

//paragraphe
  $( "#textarea" ).keypress(function() {
  document.execCommand('insertBrOnReturn', false, null);
});

var t =parent.find('.smallersize').click(function() {
console.log(document.execCommand('decreaseFontSize', false, null));

    });


var i=  parent.find('.biggersize').click(function() {
    document.execCommand('increaseFontSize', false, null);
        });









        // Call our format function.
      //markup = $.fn.my_wysiwyg.format( markup );
    });
    /*

    // fonction pour la police d'écriture... a gérer comme pour la couleur
    (function($){
    	$.fn.my_wysiwyg = function(options){
        $.this.pickFont=function(){
        return this.each(function(){
          var fonted = $(this).parent().onclick;
          parent.append('<select class="Font">');
          parent.append('<option value="Arial">Arial<option>');
          parent.append('<option value="TimesNewRoman">Times New Roman<option>');
          parent.append('<option value="Elephant">Elephant<option>');
          parent.append('<option value="Fraktur">Fraktur<option>');
          parent.append('<option value="Courrier">Courrier<option>');
          parent.append('</select>');

        })
      }
    })*/
};
