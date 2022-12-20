$(document).ready(function(){
    $(".service").click(function(e){
        e.preventDefault();
        if($(this).next(".inner").is(":hidden")){
            $(".inner").slideUp();
            $(this).next(".inner").slideDown();
        }
        else{
            $(this).next(".inner").slideUp();
        }
    });
$(".service").focusout(function(e){
        $(".inner").slideUp();
    })
})


document.querySelector(".wrap2 .po").style.display="block";
document.querySelector(".wrap2 .content .havan ").style.display="none";
document.querySelector(".wrap2 .content .jaaps ").style.display="none";
document.querySelector(".wrap2 .content .paath ").style.display="none";
document.querySelector(".wrap2 .content .bhajan ").style.display="none";
document.querySelector(".wrap2 .content .festival ").style.display="none";
document.querySelector(".wrap2 .content .shanti ").style.display="none";
document.querySelector(".wrap2 .content .pitru ").style.display="none";
document.querySelector(".wrap2 .content .donation").style.display="none";
document.querySelector(".wrap2 .content .music").style.display="none";
document.querySelector(".wrap2 .content .astrology").style.display="none"







document.querySelector(".wrap2 .a").addEventListener("click", function(){
    let element= document.querySelectorAll(".wrap2 .content .puja");
    for(var i=0; i<element.length; i++){
        element[i].style.display="block"
    }

    let elements=document.querySelectorAll(".wrap2 .content .havan")
    for(var j=0; j<elements.length; j++){
        elements[j].style.display="none"
    }

    let eleme=document.querySelectorAll(".wrap2 .content .jaaps")
    for(var j=0; j<eleme.length; j++){
        eleme[j].style.display="none"
    }

    let elem=document.querySelectorAll(".wrap2 .content .paath")
    for(var j=0; j<elem.length; j++){
        elem[j].style.display="none";
    }

    let ele=document.querySelectorAll(".wrap2 .content .bhajan")
    for(var j=0; j<ele.length; j++){
        ele[j].style.display="none";
    }

    let el=document.querySelectorAll(".wrap2 .content .festival")
    for(var j=0; j<el.length; j++){
        el[j].style.display="none";
    }

    let e=document.querySelectorAll(".wrap2 .content .shanti")
    for(var j=0; j<e.length; j++){
        e[j].style.display="none";
    }
    let et=document.querySelectorAll(".wrap2 .content .pitru")
    for(var j=0; j<et.length; j++){
        et[j].style.display="none";
    }
    let t=document.querySelectorAll(".wrap2 .content .donation")
    for(var j=0; j<t.length; j++){
        t[j].style.display="none";
    }
    let ti=document.querySelectorAll(".wrap2 .content .music")
    for(var j=0; j<ti.length; j++){
        ti[j].style.display="none";
    }
    let p=document.querySelectorAll(".wrap2 .content .astrology")
    for(var j=0; j<p.length; j++){
        p[j].style.display="none";
    }
})

document.querySelector(".wrap2 .b").addEventListener("click", function(){
    let element= document.querySelectorAll(".wrap2 .content .puja");
    for(var i=0; i<element.length; i++){
        element[i].style.display="none"
    }

    let elements=document.querySelectorAll(".wrap2 .content .havan")
    for(var j=0; j<elements.length; j++){
        elements[j].style.display="block"
    }
 
    let eleme=document.querySelectorAll(".wrap2 .content .jaaps")
    for(var j=0; j<eleme.length; j++){
        eleme[j].style.display="none"
    }

    let elem=document.querySelectorAll(".wrap2 .content .paath")
    for(var j=0; j<elem.length; j++){
        elem[j].style.display="none";
    }
    let ele=document.querySelectorAll(".wrap2 .content .bhajan")
    for(var j=0; j<ele.length; j++){
        ele[j].style.display="none";
    }

    let el=document.querySelectorAll(".wrap2 .content .festival")
    for(var j=0; j<el.length; j++){
        el[j].style.display="none";
    }

    let e=document.querySelectorAll(".wrap2 .content .shanti")
    for(var j=0; j<e.length; j++){
        e[j].style.display="none";
    }
    let et=document.querySelectorAll(".wrap2 .content .pitru")
    for(var j=0; j<et.length; j++){
        et[j].style.display="none";
    }
    let t=document.querySelectorAll(".wrap2 .content .donation")
    for(var j=0; j<t.length; j++){
        t[j].style.display="none";
    }
    let ti=document.querySelectorAll(".wrap2 .content .music")
    for(var j=0; j<ti.length; j++){
        ti[j].style.display="none";
    }
    let p=document.querySelectorAll(".wrap2 .content .astrology")
    for(var j=0; j<p.length; j++){
        p[j].style.display="none";
    }

})


document.querySelector(".wrap2 .c").addEventListener("click", function(){
    let element= document.querySelectorAll(".wrap2 .content .puja");
    for(var i=0; i<element.length; i++){
        element[i].style.display="none"
    }

    let elements=document.querySelectorAll(".wrap2 .content .havan")
    for(var j=0; j<elements.length; j++){
        elements[j].style.display="none"
    }
 
    let eleme=document.querySelectorAll(".wrap2 .content .jaaps")
    for(var j=0; j<eleme.length; j++){
        eleme[j].style.display="block"
    }

    let elem=document.querySelectorAll(".wrap2 .content .paath")
    for(var j=0; j<elem.length; j++){
        elem[j].style.display="none"
    }
    let ele=document.querySelectorAll(".wrap2 .content .bhajan")
    for(var j=0; j<ele.length; j++){
        ele[j].style.display="none";
    }

    let el=document.querySelectorAll(".wrap2 .content .festival")
    for(var j=0; j<el.length; j++){
        el[j].style.display="none";
    }

    let e=document.querySelectorAll(".wrap2 .content .shanti")
    for(var j=0; j<e.length; j++){
        e[j].style.display="none";
    }
    let et=document.querySelectorAll(".wrap2 .content .pitru")
    for(var j=0; j<et.length; j++){
        et[j].style.display="none";
    }
    let t=document.querySelectorAll(".wrap2 .content .donation")
    for(var j=0; j<t.length; j++){
        t[j].style.display="none";
    }
    let ti=document.querySelectorAll(".wrap2 .content .music")
    for(var j=0; j<ti.length; j++){
        ti[j].style.display="none";
    }
    let p=document.querySelectorAll(".wrap2 .content .astrology")
    for(var j=0; j<p.length; j++){
        p[j].style.display="none";
    }
})

document.querySelector(".wrap2 .d").addEventListener("click", function(){
    let element= document.querySelectorAll(".wrap2 .content .puja");
    for(var i=0; i<element.length; i++){
        element[i].style.display="none"
    }

    let elements=document.querySelectorAll(".wrap2 .content .havan")
    for(var j=0; j<elements.length; j++){
        elements[j].style.display="none"
    }
 
    let eleme=document.querySelectorAll(".wrap2 .content .jaaps")
    for(var j=0; j<eleme.length; j++){
        eleme[j].style.display="none"
    }

    let elem=document.querySelectorAll(".wrap2 .content .paath")
    for(var j=0; j<elem.length; j++){
        elem[j].style.display="block"
    }
    let ele=document.querySelectorAll(".wrap2 .content .bhajan")
    for(var j=0; j<ele.length; j++){
        ele[j].style.display="none";
    }

    let el=document.querySelectorAll(".wrap2 .content .festival")
    for(var j=0; j<el.length; j++){
        el[j].style.display="none";
    }

    let e=document.querySelectorAll(".wrap2 .content .shanti")
    for(var j=0; j<e.length; j++){
        e[j].style.display="none";
    }
    let et=document.querySelectorAll(".wrap2 .content .pitru")
    for(var j=0; j<et.length; j++){
        et[j].style.display="none";
    }
    let t=document.querySelectorAll(".wrap2 .content .donation")
    for(var j=0; j<t.length; j++){
        t[j].style.display="none";
    }
    let ti=document.querySelectorAll(".wrap2 .content .music")
    for(var j=0; j<ti.length; j++){
        ti[j].style.display="none";
    }
    let p=document.querySelectorAll(".wrap2 .content .astrology")
    for(var j=0; j<p.length; j++){
        p[j].style.display="none";
    }

})


document.querySelector(".wrap2 .e").addEventListener("click", function(){
    let element= document.querySelectorAll(".wrap2 .content .puja");
    for(var i=0; i<element.length; i++){
        element[i].style.display="none"
    }

    let elements=document.querySelectorAll(".wrap2 .content .havan")
    for(var j=0; j<elements.length; j++){
        elements[j].style.display="none"
    }
 
    let eleme=document.querySelectorAll(".wrap2 .content .jaaps")
    for(var j=0; j<eleme.length; j++){
        eleme[j].style.display="none"
    }

    let elem=document.querySelectorAll(".wrap2 .content .paath")
    for(var j=0; j<elem.length; j++){
        elem[j].style.display="none"
    }
    let ele=document.querySelectorAll(".wrap2 .content .bhajan")
    for(var j=0; j<ele.length; j++){
        ele[j].style.display="block";
    }

    let el=document.querySelectorAll(".wrap2 .content .festival")
    for(var j=0; j<el.length; j++){
        el[j].style.display="none";
    }

    let e=document.querySelectorAll(".wrap2 .content .shanti")
    for(var j=0; j<e.length; j++){
        e[j].style.display="none";
    }

    let et=document.querySelectorAll(".wrap2 .content .pitru")
    for(var j=0; j<et.length; j++){
        et[j].style.display="none";
    }
    let t=document.querySelectorAll(".wrap2 .content .donation")
    for(var j=0; j<t.length; j++){
        t[j].style.display="none";
    }
    let ti=document.querySelectorAll(".wrap2 .content .music")
    for(var j=0; j<ti.length; j++){
        ti[j].style.display="none";
    }
    let p=document.querySelectorAll(".wrap2 .content .astrology")
    for(var j=0; j<p.length; j++){
        p[j].style.display="none";
    }
})

document.querySelector(".wrap2 .f").addEventListener("click", function(){
    let element= document.querySelectorAll(".wrap2 .content .puja");
    for(var i=0; i<element.length; i++){
        element[i].style.display="none"
    }

    let elements=document.querySelectorAll(".wrap2 .content .havan")
    for(var j=0; j<elements.length; j++){
        elements[j].style.display="none"
    }
 
    let eleme=document.querySelectorAll(".wrap2 .content .jaaps")
    for(var j=0; j<eleme.length; j++){
        eleme[j].style.display="none"
    }

    let elem=document.querySelectorAll(".wrap2 .content .paath")
    for(var j=0; j<elem.length; j++){
        elem[j].style.display="none"
    }
    let ele=document.querySelectorAll(".wrap2 .content .bhajan")
    for(var j=0; j<ele.length; j++){
        ele[j].style.display="none";
    }

    let el=document.querySelectorAll(".wrap2 .content .festival")
    for(var j=0; j<el.length; j++){
        el[j].style.display="block";
    }

    let e=document.querySelectorAll(".wrap2 .content .shanti")
    for(var j=0; j<e.length; j++){
        e[j].style.display="none";
    }
    let et=document.querySelectorAll(".wrap2 .content .pitru")
    for(var j=0; j<et.length; j++){
        et[j].style.display="none";
    }
    let t=document.querySelectorAll(".wrap2 .content .donation")
    for(var j=0; j<t.length; j++){
        t[j].style.display="none";
    }
    let ti=document.querySelectorAll(".wrap2 .content .music")
    for(var j=0; j<ti.length; j++){
        ti[j].style.display="none";
    }
    let p=document.querySelectorAll(".wrap2 .content .astrology")
    for(var j=0; j<p.length; j++){
        p[j].style.display="none";
    }

})

document.querySelector(".wrap2 .g").addEventListener("click", function(){
    let element= document.querySelectorAll(".wrap2 .content .puja");
    for(var i=0; i<element.length; i++){
        element[i].style.display="none"
    }

    let elements=document.querySelectorAll(".wrap2 .content .havan")
    for(var j=0; j<elements.length; j++){
        elements[j].style.display="none"
    }
 
    let eleme=document.querySelectorAll(".wrap2 .content .jaaps")
    for(var j=0; j<eleme.length; j++){
        eleme[j].style.display="none"
    }

    let elem=document.querySelectorAll(".wrap2 .content .paath")
    for(var j=0; j<elem.length; j++){
        elem[j].style.display="none"
    }
    let ele=document.querySelectorAll(".wrap2 .content .bhajan")
    for(var j=0; j<ele.length; j++){
        ele[j].style.display="none";
    }

    let el=document.querySelectorAll(".wrap2 .content .festival")
    for(var j=0; j<el.length; j++){
        el[j].style.display="none";
    }

    let e=document.querySelectorAll(".wrap2 .content .shanti")
    for(var j=0; j<e.length; j++){
        e[j].style.display="block";
    }

    let et=document.querySelectorAll(".wrap2 .content .pitru")
    for(var j=0; j<et.length; j++){
        et[j].style.display="none";
    }
    let t=document.querySelectorAll(".wrap2 .content .donation")
    for(var j=0; j<t.length; j++){
        t[j].style.display="none";
    }
    let ti=document.querySelectorAll(".wrap2 .content .music")
    for(var j=0; j<ti.length; j++){
        ti[j].style.display="none";
    }
    let p=document.querySelectorAll(".wrap2 .content .astrology")
    for(var j=0; j<p.length; j++){
        p[j].style.display="none";
    }

})

document.querySelector(".wrap2 .h").addEventListener("click", function(){
    let element= document.querySelectorAll(".wrap2 .content .puja");
    for(var i=0; i<element.length; i++){
        element[i].style.display="none"
    }

    let elements=document.querySelectorAll(".wrap2 .content .havan")
    for(var j=0; j<elements.length; j++){
        elements[j].style.display="none"
    }
 
    let eleme=document.querySelectorAll(".wrap2 .content .jaaps")
    for(var j=0; j<eleme.length; j++){
        eleme[j].style.display="none"
    }

    let elem=document.querySelectorAll(".wrap2 .content .paath")
    for(var j=0; j<elem.length; j++){
        elem[j].style.display="none"
    }
    let ele=document.querySelectorAll(".wrap2 .content .bhajan")
    for(var j=0; j<ele.length; j++){
        ele[j].style.display="none";
    }

    let el=document.querySelectorAll(".wrap2 .content .festival")
    for(var j=0; j<el.length; j++){
        el[j].style.display="none";
    }

    let e=document.querySelectorAll(".wrap2 .content .shanti")
    for(var j=0; j<e.length; j++){
        e[j].style.display="none";
    }

    let et=document.querySelectorAll(".wrap2 .content .pitru")
    for(var j=0; j<et.length; j++){
        et[j].style.display="block";
    }
    let t=document.querySelectorAll(".wrap2 .content .donation")
    for(var j=0; j<t.length; j++){
        t[j].style.display="none";
    }
    let ti=document.querySelectorAll(".wrap2 .content .music")
    for(var j=0; j<ti.length; j++){
        ti[j].style.display="none";
    }
    let p=document.querySelectorAll(".wrap2 .content .astrology")
    for(var j=0; j<p.length; j++){
        p[j].style.display="none";
    }

})


document.querySelector(".wrap2 .i").addEventListener("click", function(){
    let element= document.querySelectorAll(".wrap2 .content .puja");
    for(var i=0; i<element.length; i++){
        element[i].style.display="none"
    }

    let elements=document.querySelectorAll(".wrap2 .content .havan")
    for(var j=0; j<elements.length; j++){
        elements[j].style.display="none"
    }
 
    let eleme=document.querySelectorAll(".wrap2 .content .jaaps")
    for(var j=0; j<eleme.length; j++){
        eleme[j].style.display="none"
    }

    let elem=document.querySelectorAll(".wrap2 .content .paath")
    for(var j=0; j<elem.length; j++){
        elem[j].style.display="none"
    }
    let ele=document.querySelectorAll(".wrap2 .content .bhajan")
    for(var j=0; j<ele.length; j++){
        ele[j].style.display="none";
    }

    let el=document.querySelectorAll(".wrap2 .content .festival")
    for(var j=0; j<el.length; j++){
        el[j].style.display="none";
    }

    let e=document.querySelectorAll(".wrap2 .content .shanti")
    for(var j=0; j<e.length; j++){
        e[j].style.display="none";
    }

    let et=document.querySelectorAll(".wrap2 .content .pitru")
    for(var j=0; j<et.length; j++){
        et[j].style.display="none";
    }
    let t=document.querySelectorAll(".wrap2 .content .donation")
    for(var j=0; j<t.length; j++){
        t[j].style.display="block";
    }
    let ti=document.querySelectorAll(".wrap2 .content .music")
    for(var j=0; j<ti.length; j++){
        ti[j].style.display="none";
    }
    let p=document.querySelectorAll(".wrap2 .content .astrology")
    for(var j=0; j<p.length; j++){
        p[j].style.display="none";
    }

})

document.querySelector(".wrap2 .j").addEventListener("click", function(){
    let element= document.querySelectorAll(".wrap2 .content .puja");
    for(var i=0; i<element.length; i++){
        element[i].style.display="none"
    }

    let elements=document.querySelectorAll(".wrap2 .content .havan")
    for(var j=0; j<elements.length; j++){
        elements[j].style.display="none"
    }
 
    let eleme=document.querySelectorAll(".wrap2 .content .jaaps")
    for(var j=0; j<eleme.length; j++){
        eleme[j].style.display="none"
    }

    let elem=document.querySelectorAll(".wrap2 .content .paath")
    for(var j=0; j<elem.length; j++){
        elem[j].style.display="none"
    }
    let ele=document.querySelectorAll(".wrap2 .content .bhajan")
    for(var j=0; j<ele.length; j++){
        ele[j].style.display="none";
    }

    let el=document.querySelectorAll(".wrap2 .content .festival")
    for(var j=0; j<el.length; j++){
        el[j].style.display="none";
    }

    let e=document.querySelectorAll(".wrap2 .content .shanti")
    for(var j=0; j<e.length; j++){
        e[j].style.display="none";
    }

    let et=document.querySelectorAll(".wrap2 .content .pitru")
    for(var j=0; j<et.length; j++){
        et[j].style.display="none";
    }
    let t=document.querySelectorAll(".wrap2 .content .donation")
    for(var j=0; j<t.length; j++){
        t[j].style.display="none";
    }
    let ti=document.querySelectorAll(".wrap2 .content .music")
    for(var j=0; j<ti.length; j++){
        ti[j].style.display="block";
    }
    let p=document.querySelectorAll(".wrap2 .content .astrology")
    for(var j=0; j<p.length; j++){
        p[j].style.display="none";
    }

})

document.querySelector(".wrap2 .k").addEventListener("click", function(){
    let element= document.querySelectorAll(".wrap2 .content .puja");
    for(var i=0; i<element.length; i++){
        element[i].style.display="none"
    }

    let elements=document.querySelectorAll(".wrap2 .content .havan")
    for(var j=0; j<elements.length; j++){
        elements[j].style.display="none"
    }
 
    let eleme=document.querySelectorAll(".wrap2 .content .jaaps")
    for(var j=0; j<eleme.length; j++){
        eleme[j].style.display="none"
    }

    let elem=document.querySelectorAll(".wrap2 .content .paath")
    for(var j=0; j<elem.length; j++){
        elem[j].style.display="none"
    }
    let ele=document.querySelectorAll(".wrap2 .content .bhajan")
    for(var j=0; j<ele.length; j++){
        ele[j].style.display="none";
    }

    let el=document.querySelectorAll(".wrap2 .content .festival")
    for(var j=0; j<el.length; j++){
        el[j].style.display="none";
    }

    let e=document.querySelectorAll(".wrap2 .content .shanti")
    for(var j=0; j<e.length; j++){
        e[j].style.display="none";
    }

    let et=document.querySelectorAll(".wrap2 .content .pitru")
    for(var j=0; j<et.length; j++){
        et[j].style.display="none";
    }
    let t=document.querySelectorAll(".wrap2 .content .donation")
    for(var j=0; j<t.length; j++){
        t[j].style.display="none";
    }
    let ti=document.querySelectorAll(".wrap2 .content .music")
    for(var j=0; j<ti.length; j++){
        ti[j].style.display="none";
    }
    let p=document.querySelectorAll(".wrap2 .content .astrology")
    for(var j=0; j<p.length; j++){
        p[j].style.display="block";
    }

})











