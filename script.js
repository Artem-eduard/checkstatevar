function loadVariable()
{
	$.get('service.php').done(function(data) {
		if (data == "NONE")
		{
			$("#div_var1").hide();	
			$("#div_var2").hide();	
		}
		else
		{
			$("#div_var1").show();	
			$("#div_var2").show();	
			var datas = data.split(",");
            $('#div_var1').html("<h2>" + datas[0] + "</h2>");
			$('#div_var2').html("<h2>" + datas[1] + "</h2>");
						
		}
	}).fail(function(data) {
		console.log('Error: ' + data);
		$("#div_var1").hide();	
		$("#div_var2").hide();	
	})
}

$(document).ready(function(){
	$("#div_var1").hide();	
	$("#div_var2").hide();	
   loadVariable();
});

setInterval(loadVariable(), 10000);
