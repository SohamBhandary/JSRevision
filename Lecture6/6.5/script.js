// event delegation: jab aap evenet listener se kai saare differnt elemenst ke evenst ko handle kar sake
//event listenr ko parent par lagao and unko id class ya fir tag ke basis par differntiate karke differnt task karo;

var parent= document.querySelector(".parent");
parent.addEventListener("click",function(e){
    if(e.target.id==="play"){
        console.log(play);
    }
})