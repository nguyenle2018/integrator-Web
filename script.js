//==================header=============

//fixed menu

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.boxShadow = "0px 5px 64px rgba(0, 0, 0, 0.15)";
    document.getElementById("navbar").style.zIndex = "100";
    document.getElementById("navbar").style.width = "100%";

 } else{
    document.getElementById("navbar").style = "none";
    
 }

}






//======section4======= 

const listBox = document.querySelectorAll('.box');
const wrapperBox = document.querySelector('.review-box');
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');
const reviewDiv = document.querySelector('.review');


function make_slide(amountSlideAppear) {
    // set width and margin for item slide
    const widthItemAndMargin = reviewDiv.offsetWidth / amountSlideAppear;
    let widthAllBox = widthItemAndMargin * listBox.length;
    wrapperBox.style.width = `${widthAllBox}px`;

    listBox.forEach((element) => {
        element.style.marginRight = '20px';
        element.style.width = `${widthItemAndMargin - 20}px`;
    });

    // handle slide
    let count = 0;
    let spacing = widthAllBox - amountSlideAppear * widthItemAndMargin;
    btnRight.addEventListener('click', function () {
        count += widthItemAndMargin;

        if (count > spacing) {
            count = 0;
        }
        wrapperBox.style.transform = `translateX(${-count}px)`;
    });

    btnLeft.addEventListener('click', function () {
        count -= widthItemAndMargin;

        if (count < 0) {
            count = spacing;
        }
        wrapperBox.style.transform = `translateX(${-count}px)`;
    });
}
document.addEventListener('DOMContentLoaded', function () {
    // responsive
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1366) {
            make_slide(3);
        } else if (window.innerWidth >= 992) {
            make_slide(2);
        } else {
            make_slide(1);
        }
    });

    const media = [
        window.matchMedia('(min-width: 1366px)'),
        window.matchMedia('(min-width: 992px)'),
    ];

    if (media[0].matches) {
        make_slide(3);
    } else if (media[1].matches) {
        make_slide(2);
    } else {
        make_slide(1);
    }
});
