console.log('hey');

window.onscroll = () => {
    let scrollPosition = $(document).scrollTop();

    if (scrollPosition === 0){
        console.log('add')
        $( ".navbar" ).addClass( "nav-transparent" );
    }else{
        console.log('remove')
        $( ".navbar" ).removeClass( "nav-transparent" );
    }
}


