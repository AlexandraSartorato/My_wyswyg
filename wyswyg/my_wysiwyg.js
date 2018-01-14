$.fn.my_wysiwyg = function( options ) {
  var settings = $.extend({
          color: "black",
          backgroundColor: "DarkGrey",
          navBackgroundColor:"LightGrey",
          buttons: ['bold', 'italic','underline', 'color', 'font', 'size', 'justify', 'strikethrough', 'link', 'trait', 'source', 'save', 'pic', 'video']
       }, options );


       return this.each(function() {
        var parent = $( this ).parent();
        var menu = parent.prepend('<div class="nav"><i class="fa fa-pencil fa-2x" aria-hidden="true"></div>');
        var editor = parent.append('<div id="textarea" contenteditable="true"></div>');

        $('#textarea').css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
        $('.nav').css({
            backgroundColor: settings.navBackgroundColor
        });

        if($.inArray('bold',settings['buttons'])!= -1){
        parent.find('.nav').append('<button type="button" class="bold"><i class="fa fa-bold" aria-hidden="true"></i></button>');
        var bold_font = parent.find('.bold').click(function() {
        document.execCommand('bold', false, null);
          });
      }

      if($.inArray('italic',settings['buttons'])!= -1){
       parent.find('.nav').append('<button type="button" class="italic"><i class="fa fa-italic" aria-hidden="true"></i></button>');
       parent.find('.italic').click(function() {
       document.execCommand('italic', false, null);
           });
      }
      if($.inArray('underline',settings['buttons'])!= -1){
       parent.find('.nav').append('<button type="button" class="underline"><i class="fa fa-underline" aria-hidden="true"></i></button>');
       parent.find('.underline').click(function() {
       document.execCommand('underline', false, null);
         });
      }

      if($.inArray('color',settings['buttons'])!= -1){
        parent.find('.nav').append('<input type="color" class="color">');
        parent.find('.color').change(function() {
        document.execCommand('foreColor', false, $('.color').val());
            });
      }
      if($.inArray('font',settings['buttons'])!= -1){
        parent.find('.nav').append('<select class="font"><option value="default">Fonts</option><option value="arial">Arial</option><option value="Courrier">Courrier</option><option value="times new roman">Times New Roman</option><option value="elephant">Elephant</option></select>');
        parent.find('.font').change(function(){
          $('#textarea').css('font-family', $('.font').val());
        });
      }

      if($.inArray('size',settings['buttons'])!= -1){
       parent.find('.nav').append('<select class="text_size"><option value="default">Font-size</option><option value="7">52px</option><option value="6">48px</option><option value="5">32px</option><option value="4">24px</option><option value="3">12px</option><option value="2">10px</option><option value="1">8px</option></select>');
       parent.find('.text_size').click(function() {
       document.execCommand('fontSize', false, $('.text_size').val());
             });
      }
     if($.inArray('justify',settings['buttons'])!= -1){
       parent.find('.nav').append('<button type="button" class="left"><i class="fa fa-align-left" aria-hidden="true"></i></button>');
       parent.find('.nav').append('<button type="button" class="center"><i class="fa fa-align-center" aria-hidden="true"></i></button>');
       parent.find('.nav').append('<button type="button" class="right"><i class="fa fa-align-right" aria-hidden="true"></i></button>');
       parent.find('.nav').append('<button type="button" class="justify"><i class="fa fa-align-justify" aria-hidden="true"></i></button>');
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
     }

     if($.inArray('trait',settings['buttons'])!= -1){
     parent.find('.nav').append('<button type="button" class="biggersize">Zoom <i class="fa fa-plus-square-o" aria-hidden="true"></i></button>');
     var biggersize = parent.find('.biggersize').click(function(){
       var size = parseInt($('#textarea').css("font-size"));
       var fontsize = size + 1 + "px";
       $('#textarea').css({'font-size':fontsize});
     });

      parent.find('.nav').append('<button type="button" class="smallersize">Zoom <i class="fa fa-minus-square-o" aria-hidden="true"></i></button>');
      var smallersize = parent.find('.smallersize').click(function(){
      var size = parseInt($('#textarea').css("font-size"));
      var fontsize = size - 1 + "px";
      $('#textarea').css({'font-size':fontsize});
    });
 }



     if($.inArray('link',settings['buttons'])!= -1){
         parent.find('.nav').append('<button type="button" class="link"><i class="fa fa-link" aria-hidden="true"></i></button>');
         parent.find('.link').click(function() {
           var raw_link = prompt('insert link');
           parent.find('#textarea').append('<a href="'+ raw_link +'" target="_blank">'+raw_link+'</a>');
          //document.execCommand('createLink', false, raw_link);
       });
     }

     if($.inArray('strikethrough',settings['buttons'])!= -1){
         parent.find('.nav').append('<button type="button" class="strikethrough"><i class="fa fa-strikethrough" aria-hidden="true"></i></button>');
         parent.find('.strikethrough').click(function() {
         document.execCommand('strikeThrough', false, null);
           });
     }

     if ($.inArray('source', settings['buttons']) != -1){
       parent.find('.nav').append('<button type="button" class="source"><i class="fa fa-code" aria-hidden="true"></i></button>');
       parent.find('.source').click(function(){
         alert($('html').html());
         });
     }

      if ($.inArray('save', settings['buttons']) !=-1){
       parent.find('.nav').append('<button type="button" class="save"><i class="fa fa-floppy-o" aria-hidden="true"></i></button>');
       parent.find('.save').click(function(){
         var inner= $('#textarea').html();
         localStorage.setItem('text', inner);
         if(window.localStorage.length> 1){
           alert('Saved !');
         };
         $(document).ready(function(){
             setInterval(function(){
               var inner= $('#textarea').html();
               localStorage.setItem('text', inner);
                 } , 300000);
       });
     });
   };
    if ($.inArray('pic', settings['buttons']) !=-1){
           parent.find('.nav').append('<button type="button" class="picture"><i class="fa fa-picture-o" aria-hidden="true"></i></i></button>');
           parent.find('.picture').click(function(){
             var img = prompt('url picture');
            document.execCommand('insertImage', false, img);
           })};

    if ($.inArray('video', settings['buttons']) !=-1){
    parent.find('.nav').append('<button type="button" class="video"><i class="fa fa-video-camera" aria-hidden="true"></i></button>');
    parent.find('.video').click(function(){
    var video_link = prompt('Video link');
    var dayli = video_link.match('/video');
    var youtube=video_link.match('/watch');
    if (dayli != null){
       var final=video_link.replace("/video/", "/embed/video/");
      parent.find('#textarea').append('<iframe src="'+ final +'"></iframe>');
    }
    if(youtube !=null){
    var final_video = video_link.replace("/watch?v=", "/embed/");
    parent.find('#textarea').append('<iframe src="'+ final_video +'"></iframe>');
    }
    }
    )};

    });
};
