$("#modal0").submit(function(e){
	e.preventDefault();
	var nameForm = document.forms["nameForm"];
	var userName = nameForm.elements['userName'].value;
	var userEmail = nameForm.elements['userEmail'].value;
	var userPhone = nameForm.elements['userPhone'].value;
	var userComm = nameForm.elements['userComm'].value;

	$.ajax({
		type:'POST',
		url:'/user',
		data:JSON.stringify({userName:userName, userEmail:userEmail,userPhone:userPhone, userComm:userComm }),
		dataType:'json',
		contentType:'application/json',
		success: function(data){
			$('.form-name').html('<h5>Спасибо за обращение!</h5>');
		}
	});
});
$(document).ready(function() {
	var modalForm = false;

	$('#modalForm1').click(function(event){
		if(!modalForm){
			$('#modal1').html('<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true" id="modal11"><div class="modal-dialog" role="document"><div id ="modalContent1" class="modal-content text-center"><div class="modal-header text-center"><h5 class="modal-title" id="exampleModalLabel">Заказать со скидкой</h5><button class="close " type="button" data-dismiss="modal" aria-label="close"><span aria-hidden="true">&times;</span></button>   </div><div class="modal-body"><form action = "javascript:void(null);" method ="POST" name = "nameForm1"><div class="form-group"><label for="exampleInputName"></label><input type="text" class="form-control" id="exampleInputName" name="userName" placeholder="Имя"></div><div class="form-group"><label for="exampleInputText"></label><input type="text" class="form-control" name="userPhone" id="exampleInputText" placeholder="E-mail или телефон"></div><div class="container text-center"><button class="btn btn-primary text-center" type = "submit" value = "send">Заказать со скидкой</button></div></form></div></div></div></div>');

		}else{
			$('#modal1').html('<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true"><div class="modal-dialog" role="document"> <div class="modal-content text-center"><h5  id="exampleModalLabel">Спасибо за Вашу заявку, мы свяжимся с вами в ближайшее время!</h5></div></div></div>');
		};
	});

		$("#modal1").submit(function(e){
			e.preventDefault();
			var nameForm1 = document.forms["nameForm1"];
			var userName = nameForm1.elements['userName'].value;
			var userPhone = nameForm1.elements['userPhone'].value;

			$.ajax({
				type:'POST',
				url:'/user',
				data:JSON.stringify({userName:userName,userPhone:userPhone}),
				dataType:'json',
				contentType:'application/json',
				success: function(data){
					$('#modalContent1').html('<div id ="modalContent1" class="modal-content text-center"><h5  id="exampleModalLabel">Спасибо за Вашу заявку, мы свяжимся с вами в ближайшее время!</h5></div>');
				}
			});

			modalForm = true;
		});

	$('#modalForm2').click(function(event){
		if(!modalForm){
			$('#modal2').html('<div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true" id="modal11"><div class="modal-dialog" role="document"><div id ="modalContent2" class="modal-content text-center"><div class="modal-header text-center"><h5 class="modal-title" id="exampleModalLabel2">Хочу компенсацию!</h5><button class="close " type="button" data-dismiss="modal" aria-label="close"><span aria-hidden="true">&times;</span></button>   </div><div class="modal-body"><form action = "javascript:void(null);" method ="POST" name = "nameForm2"><div class="form-group"><label for="exampleInputName"></label><input type="text" class="form-control" id="exampleInputName" name="userName" placeholder="Имя"></div><div class="form-group"><label for="exampleInputText"></label><input type="text" class="form-control" name="userPhone" id="exampleInputText" placeholder="E-mail или телефон"></div><div class="container text-center"><button class="btn btn-primary text-center" type = "submit" value = "send">Хочу компенсацию!</button></div></form></div></div></div></div>');

		}else{
			$('#modal2').html('<div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true"><div class="modal-dialog" role="document"> <div class="modal-content text-center"><h5  id="exampleModalLabel">Спасибо за Вашу заявку, мы свяжимся с вами в ближайшее время!</h5></div></div></div>');
		};
	});
	$("#modal2").submit(function(e){
			e.preventDefault();
			var nameForm2 = document.forms["nameForm2"];
			var userName = nameForm2.elements['userName'].value;
			var userPhone = nameForm2.elements['userPhone'].value;

			$.ajax({
				type:'POST',
				url:'/user',
				data:JSON.stringify({userName:userName,userPhone:userPhone}),
				dataType:'json',
				contentType:'application/json',
				success: function(data){
					$('#modalContent2').html('<div id ="modalContent2" class="modal-content text-center"><h5  id="exampleModalLabel">Спасибо за Вашу заявку, мы свяжимся с вами в ближайшее время!</h5></div>');
				}
			});

			modalForm = true;
	});

	$('#modalForm3').click(function(event){
		if(!modalForm){
			$('#modal3').html('<div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true" id="modal11"><div class="modal-dialog" role="document"><div id ="modalContent3" class="modal-content text-center"><div class="modal-header text-center"><h5 class="modal-title" id="exampleModalLabel3">Перезвоните мне!</h5><button class="close " type="button" data-dismiss="modal" aria-label="close"><span aria-hidden="true">&times;</span></button>   </div><div class="modal-body"><form action = "javascript:void(null);" method ="POST" name = "nameForm3"><div class="form-group"><label for="exampleInputName"></label><input type="text" class="form-control" id="exampleInputName" name="userName" placeholder="Имя"></div><div class="form-group"><label for="exampleInputText"></label><input type="text" class="form-control" name="userPhone" id="exampleInputText" placeholder="Номер телефона"></div><div class="container text-center"><button class="btn btn-primary text-center" type = "submit" value = "send">Перезвоните мне!</button></div></form></div></div></div></div>');

		}else{
			$('#modal3').html('<div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true"><div class="modal-dialog" role="document"> <div class="modal-content text-center"><h5  id="exampleModalLabel">Спасибо за Вашу заявку, мы свяжимся с вами в ближайшее время!</h5></div></div></div>');
		};
	});
	$("#modal3").submit(function(e){
			e.preventDefault();
			var nameForm3 = document.forms["nameForm3"];
			var userName = nameForm3.elements['userName'].value;
			var userPhone = nameForm3.elements['userPhone'].value;

			$.ajax({
				type:'POST',
				url:'/user',
				data:JSON.stringify({userName:userName,userPhone:userPhone}),
				dataType:'json',
				contentType:'application/json',
				success: function(data){
					$('#modalContent3').html('<div id ="modalContent3" class="modal-content text-center"><h5  id="exampleModalLabel">Спасибо за Вашу заявку, мы свяжимся с вами в ближайшее время!</h5></div>');
				}
			});
			modalForm = true;
	});
});