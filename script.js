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
			var datas = data.split(",");
			$('#div_var1').html("<h2>" + datas[0] + "</h2>");
			$('#div_var2').html("<h2>" + datas[1] + "</h2>");
			
			if (datas[2] == true)
			{
				$("#div_var1").show();	
				$("#div_var2").show();	
            
			}
			else
			{
				$("#div_var1").hide();	
				$("#div_var2").hide();	
				
			}
						
		}
		setTimeout(loadVariable, 10000);
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
