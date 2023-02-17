
 import Swal from 'sweetalert2';
class ValidationHelper{
isEmpty(value){
    if(value.length === 0){
      return true;
    }
    else{
    return false;
    }
}

SuccessAlert(msg){
Swal.fire(msg)
}
ErrorAlert(msg){
    Swal.fire(msg)
    }
}

export const {isEmpty, SuccessAlert, ErrorAlert} = new ValidationHelper();