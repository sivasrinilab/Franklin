export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });

  var filerbtn = document.querySelectorAll(".columns.block .button-container a.button");
    filerbtn.forEach(singleTag=>{
        singleTag.addEventListener('click', event=>{
            event.preventDefault();
            filerbtn.forEach(singleItem=>{
                singleItem.classList.remove('active');
            });
            singleTag.classList.add("active");
          var text = singleTag.text;
          switch(text){
            case "All credit cards":
          $('.cards ul li').show();
              break;
            case "Cash back":
              $('.cards ul li').hide();
              document.querySelectorAll('.cards ul li h4').forEach(txt=>{
                if(txt.textContent.search('cashback') != -1){
               txt.parentNode.parentNode.show()
                }
              });
              break;
          }
          
        }
        )
    });
}
