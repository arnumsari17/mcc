//untuk update dan insert
function onClickUpdated() {
        event.preventDefault();
        let form = $('form');
        console.log(form);
        swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
    }).then((result) => {
        if (result.isConfirmed) {
            swal.fire(
                    'Updated!',
                    'Your file has been updated.',
                    );
            form.submit();
        }
    });
}

//untuk logout 
function OnClickLogout(){
        event.preventDefault();
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't exit from this web",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes!'
        }).then((result) => {
          if(result.isConfirmed) {
            Toast.fire({
                icon:'access',
                title:'process logout from your account!!',
            })
            setTimeout(function(){
                window.location.href="/logout"
            },2000);
        }
    })
        }
        
        const Toast=Swal.mixin({
            toast:true,
            position: 'top-end',
            showConfirmButton:false,
            time:2000,
            timerProgressBar: true,
            didOpen:(toast)=>{
                toast.addEventListener('mouseenter',Swal.stopTimer)
                toast.addEventListener('mouseleave',Swal.resumeTimer)
            }
        })
        