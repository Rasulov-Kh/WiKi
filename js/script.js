window.addEventListener('load', function () {
    var li=document.querySelectorAll('.images');
    var modal1=document.querySelectorAll('.modal1');
    var closeModal = document.querySelectorAll('.close');
    var overlay = document.querySelector('.overlay');
    if(document.location.href.indexOf('showModal0')!=-1){
        overlay.style.display = 'block';
        modal1[0].classList.add('show');
        closeModal[0].addEventListener('click', function(){
            overlay.style.display = 'none'
            modal1[0].classList.remove('show');
        })
    }
    if(document.location.href.indexOf('showModal-1')!=-1){
        overlay.style.display = 'block';
        modal1[1].classList.add('show');
        closeModal[1].addEventListener('click', function(){
            overlay.style.display = 'none'
            modal1[1].classList.remove('show');
        })
    }
    if(document.location.href.indexOf('showModal2')!=-1){
        overlay.style.display = 'block';
        modal1[2].classList.add('show');
        closeModal[2].addEventListener('click', function(){
            overlay.style.display = 'none'
            modal1[2].classList.remove('show');
        })
    }
    if(document.location.href.indexOf('showModal3')!=-1){
        overlay.style.display = 'block';
        modal1[3].classList.add('show');
        closeModal[3].addEventListener('click', function(){
            overlay.style.display = 'none'
            modal1[3].classList.remove('show');
        })
    }
    if(document.location.href.indexOf('showModal4')!=-1){
        overlay.style.display = 'block';
        modal1[4].classList.add('show');
        closeModal[4].addEventListener('click', function(){
            overlay.style.display = 'none'
            modal1[4].classList.remove('show');
        })
    }
    if(document.location.href.indexOf('showModal5')!=-1){
        overlay.style.display = 'block';
        modal1[5].classList.add('show');
        closeModal[5].addEventListener('click', function(){
            overlay.style.display = 'none'
            modal1[5].classList.remove('show');
        })
    }
    if(document.location.href.indexOf('showModal6')!=-1){
        overlay.style.display = 'block';
        modal1[6].classList.add('show');
        closeModal[6].addEventListener('click', function(){
            overlay.style.display = 'none'
            modal1[6].classList.remove('show');
        })
    }
    if(document.location.href.indexOf('showModal7')!=-1){
        overlay.style.display = 'block';
        modal1[7].classList.add('show');
        closeModal[7].addEventListener('click', function(){
            overlay.style.display = 'none'
            modal1[7].classList.remove('show');
        })
    }
    if(document.location.href.indexOf('showModal8')!=-1){
        overlay.style.display = 'block';
        modal1[8].classList.add('show');
        closeModal[8].addEventListener('click', function(){
            overlay.style.display = 'none'
            modal1[8].classList.remove('show');
        })
    }
    if(document.location.href.indexOf('showModal9')!=-1){
        overlay.style.display = 'block';
        modal1[9].classList.add('show');
        closeModal[9].addEventListener('click', function(){
            overlay.style.display = 'none'
            modal1[9].classList.remove('show');
        })
    }
    if(document.location.href.indexOf('showModal10')!=-1){
        overlay.style.display = 'block';
        modal1[10].classList.add('show');
        closeModal[10].addEventListener('click', function(){
            overlay.style.display = 'none'
            modal1[10].classList.remove('show');
        })
    }
    if(document.location.href.indexOf('showModal11')!=-1){
        overlay.style.display = 'block';
        modal1[11].classList.add('show');
        closeModal[11].addEventListener('click', function(){
            overlay.style.display = 'none'
            modal1[11].classList.remove('show');
        })
    }
    if(document.location.href.indexOf('showModal12')!=-1){
        overlay.style.display = 'block';
        modal1[12].classList.add('show');
        closeModal[12].addEventListener('click', function(){
            overlay.style.display = 'none'
            modal1[12].classList.remove('show');
        })
    }
    if(document.location.href.indexOf('showModal13')!=-1){
        overlay.style.display = 'block';
        modal1[13].classList.add('show');
        closeModal[13].addEventListener('click', function(){
            overlay.style.display = 'none'
            modal1[13].classList.remove('show');
        })
    }
    if(document.location.href.indexOf('showModal14')!=-1){
        overlay.style.display = 'block';
        modal1[14].classList.add('show');
        closeModal[14].addEventListener('click', function(){
            overlay.style.display = 'none'
            modal1[14].classList.remove('show');
        })
    }
    if(document.location.href.indexOf('showModal15')!=-1){
        overlay.style.display = 'block';
        modal1[15].classList.add('show');
        closeModal[15].addEventListener('click', function(){
            overlay.style.display = 'none'
            modal1[15].classList.remove('show');
        })
    }
    if(document.location.href.indexOf('showModal16')!=-1){
        overlay.style.display = 'block';
        modal1[16].classList.add('show');
        closeModal[16].addEventListener('click', function(){
            overlay.style.display = 'none'
            modal1[16].classList.remove('show');
        })
    }
    if(document.location.href.indexOf('showModal17')!=-1){
        overlay.style.display = 'block';
        modal1[17].classList.add('show');
        closeModal[17].addEventListener('click', function(){
            overlay.style.display = 'none'
            modal1[17].classList.remove('show');
        })
    }
    
    for(var i=0; i<li.length; i++){
        li[i].onclick = function() {
            var data = this.getAttribute('data-img');
            overlay.style.display = 'block';
            modal1[data].classList.add('show');
            closeModal[data].addEventListener('click', function(){
                overlay.style.display = 'none'
                modal1[data].classList.remove('show');
            })
        }
                
    }

    
    
})
