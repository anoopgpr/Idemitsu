$.mobile.allowCrossDomainPages = true;
_debug = false;

var popUp;
var city_id='';
var category_id='';

var gallery_cat='';
var galstr='';
var player_cat='';
var fix_cat='';

var reg_id="";
var backstore ="";
var lastattemptpage='';

var shop_img='';
var pan_img='';
var aadhar_img='';

var file_pphoto='';
var file_pdoc='';
var file_adimg_front='';
var file_adimg_back='';
var doc_img='';


var json_fb='https://taghash.co/mloyalApps/facebookidemitsu.php';
var RSS_twitter='https://taghash.co/mloyalApps/twitter.php?uname=idemitsuhome';
var RSS_pinterest='http://103.25.128.61/projects/taghash/mloyalApps/pinteresttantra.php?brand=idemitsu';
var RSS_instagram='https://www.instagram.com/idemitsu/?__a=1';
var RSS_youtube='http://xceedfbapps.com/mloyalfeeds/youtube.php?brandname=idemitsu';
var RSS_tumblr='http://xceedfbapps.com/mloyalfeeds/tumblr.php?brandurl=http://idemitsu.tumblr.com';

var brandname='idemitsu';
var aboutus_det='idemitsu';
var brand_url='https://www.idemitsu.com/';
var cart = { cartdata: []};
var indexary=new Array();
var ids = [];
var cityarr=new Array();
var cityidarr=new Array();

user = {
	"balance" : 0,
	"firstname" : "",
	"id" : "",
	"lastname" : "",
	"total" : 0,
	"validity" : "",
	"mobile" : "",
	"datatype":"",
	"other_mobile_no":"",
	"Upi_id":"",
	"store_code_idemitsu" : "",
	"email":"",
	"dob":"",
	"membership_slab":"",
	"pincode":"",
	"city":"",
	"age":"",
	"locationn":"",
    "address":"",
	"district":"",
	"gender":"",
	"cattype_ex":"",
	"gst_no":"",
	"pan_no":"",
	"aadhar_no":"",
	"p_photo":"",
	"state":"",
	"IsApproved_se":"",
	"totalpurchaseval":"",
	"totalpurchaseval_approved":"",
	"cashback":"",
	"Nature_Workshop":"",
	"Vehicle_Type":"",
	"vehicleno":"",
	"No_of_Mechanics":"",
	"Potential":"",
	"Charger_Available":"",
	"Preferred_Language":"",
	"Preferred_Payment_mode":"",
	"Shop_Name":"",
	"ShopPhoto":"",
	"docPhoto":"",
	"adhPhoto":"",
	"adimg_front":"",
	"adimg_back":"",
	"refer_code":"",
	"manpower":"",
	"infrastructure":"",
	"bankaccountno":"",
	"ongoing_sites":"",
	"completed_sites":"",
	"source":"",
	"point_claim":"",
	"ao_code":"",
	"ao_name":"",
	"mobile_alt":"",
	"retailShopName":"",
	"code":"",
	"businessCategory":"",
	"companyName":"",
	"ownerName":"",
	"VehicleOptions":"",
	"WhereBuy":"",
	"VehicleMGF":"",
    "VehicleModel":"",
    "LUEO":"",
	"uid_idemitsu":"",
	"distown_code":""

};

store = {
	"store_id" : "",
    "store_name" : "",
	"store_category" : "",
    "redeem_logic" : "",
    "store_members" : "",
	"store_rank" : "",
	"storecode ":"",
	"storefirstname ":"",
	"secode ":"",
	"sename ":"",
	"storemobile":""
};

var SERVER = "https://idemitsu.mloyalretail.com/m/";
var SERVER1 = "https://idemitsu.mloyalretail.com/";
var SERVER2 = "https://idemitsu.mloyalretail.com/APIs/";
var SERVER3 = 'https://idemitsu.mloyalretail.com/Rewards/';
var GSERVER2 = "https://idemitsu.mloyalretail.com/APIs/";
var GSERVER22 = "https://idemitsu.mloyalretail.com/APIs/";
var SERVERCPACTION = "https://taghash.co/grati/idemitsu/cpnaction.php";


var gbrd='CAD0586C-A734-49A0-8DD4-AD9F8CA9E1D2';


var SERVER_m = "https://mliveshare.com/"; 
var SERVER1_m = "https://mliveshare.com/user/";
var BITLYS = "https://mliveshare.com/";
var versionurl  ='https://taghash.co/';
var versionurl1  ='https://taghash.co/';



var app_versionCode = '2';

$(document).ready(function(event){
	
	$( function() {
		 $("#optionspop_profile").enhanceWithin().popup();
		 $("#shopPhotoregistration_photo").enhanceWithin().popup();
		 $("#identficationPhotoregistration_photo").enhanceWithin().popup();
		 $("#tnc_popup").enhanceWithin().popup();
		 $("#imagePopup").enhanceWithin().popup();
		 $("#imagePopup_four").enhanceWithin().popup();
		//  $("#twoWeeler_image").enhanceWithin().popup();
		 $("#panCard_popup").enhanceWithin().popup();
	});

	$("#wait").css("display","none");
	
	$(document).ajaxStart(function() {
		   $("#wait").css("display","block");
		});
	  
	$(document).ajaxStop(function() {
		   $("#wait").css("display","none");
		});

	localStorage.setItem('selectedstoreidemitsu',gbrd);

	loadState_list();
	//load_dealerlist_forinfluencer();
	//use for auto fill the user pre code
	// var exmpleInput = document.getElementById('distributorCode');
	// 			if(exmpleInput) {
	// 				exmpleInput.addEventListener("input", function() {
						
	// 					var text = $(this).val().trim();

	// 					if (text.indexOf('235009') === 0 ) {
	// 						// Valid
	// 					} else {
	// 						// Invalid, then add a at the start
	// 						$(this).val('235009' + text);
	// 					}


	// 				}, false);
	// 			}
	

	document.addEventListener("backbutton", function(e)
	{
		   if($.mobile.activePage.is('#form-btn-pg'))
		   {
				navigator.app.exitApp();
		   }
		   if($.mobile.activePage.is('#dealerhomepage'))
		   {
			   e.preventDefault();
			   var x;
				if (confirm("Are you sure you want to exit?") == true) {
					x = "Yes";
					navigator.app.exitApp();
				} else {
					x = "No";
				}
		   }
		   else 
		   {
			   navigator.app.backHistory();
		   }
	 }, false);

                var cattype = localStorage.getItem('categorySelected');

				if(typeof cattype==undefined || cattype== null)
				cattype='';

			        /*if(cattype=='Distributor')
					{

						var dealeruser = localStorage.getItem("usernamemloyal_idemitsu");
						var dealerpass = localStorage.getItem("userpassloyal_idemitsu");
						if(typeof dealeruser == undefined || dealeruser == null)
							dealeruser = '';
						if(typeof dealerpass == undefined || dealerpass == null)
							dealerpass = '';
						//console.log('dealeruser'+dealeruser+'.......dealerpass'+dealerpass);
						if(dealeruser!='')
						{
							$('#dealerusername').val(dealeruser);
							//$('#dealer_mobileno').val(dealeruser);
						}
						if(dealeruser!='' && dealerpass!='')
	                    {
	                           $('#dealerusername').val(localStorage.getItem("usernamemloyal_idemitsu"));
	                           //$('#dealer_mobileno').val(localStorage.getItem("usermobilemloyal_idemitsu"));
	                           //$('#dealerpassword').val(localStorage.getItem("userpassloyal_idemitsu"));
	                           var pass = localStorage.getItem("userpassloyal_idemitsu");
							   if(pass.length>=4)
						       {
						       

									$('#dealerpassword').val(pass);
						        }
						        $.mobile.changePage( "#gifslider", { transition: "none"} );
								setTimeout( function() {
								    dealerauthenticate();
								}, 1000);  // 1 seconds
	                           
                        }
                        else if(dealeruser!='' && dealerpass=='')
		                {
	                        $('#dealerusername').val(localStorage.getItem("usernamemloyal_idemitsu"));
	                        $.mobile.changePage( "#page-login-dealer", { transition: "none"} );
	                        
		                }
	                    else
	                    {
	                     	$.mobile.changePage( "#form-btn-pg", { transition: "none"} );
							
						}
			    }*/
                if(cattype=='Workshop' || cattype=='Retailer' || cattype=='Mechanic' || cattype=='Consumer' || cattype=='Distributor')
	            {

				  if(localStorage.getItem("usernameidemitsu")!=null && localStorage.getItem("usernameidemitsu")!='' && localStorage.getItem("passwordidemitsu")!=null && localStorage.getItem("passwordidemitsu")!='')
				  {
						$('#username_new').val(localStorage.getItem("usernameidemitsu"));
						var pass = localStorage.getItem("passwordidemitsu");

						if(pass.length>=4)
						{
						  var i=4;
						  while(i>0)
								  {
									$('#codeBox'+i).val(parseInt(pass%10));
									i--;
									pass = parseInt(pass/10);
									
								  }
						}

						//$('#password_myacc').val(localStorage.getItem("passwordidemitsu"));
						user.mobile = localStorage.getItem('usernameidemitsu');
						var pwd = localStorage.getItem('passwordidemitsu');
						var uname = user.mobile;
						user.balance = localStorage.getItem('balance');
						user.firstname = localStorage.getItem('firstname');
						user.lastname = localStorage.getItem('lastname');
						user.id = localStorage.getItem('id');
						user.total = localStorage.getItem('total');
						user.validity = localStorage.getItem('validity');
						user.trans_sms = localStorage.getItem('trans_sms');
						user.mktgsms = localStorage.getItem('mktgsms');
						user.cpns = localStorage.getItem('cpns');
						user.ads = localStorage.getItem('ads');
						user.dob = localStorage.getItem('dob');
						user.emailid = localStorage.getItem('emailid');
						user.store_code_idemitsu = localStorage.getItem('store_code_idemitsu');
						user.def_store = localStorage.getItem('def_store');
						user.def_city = localStorage.getItem('def_city');
						user.visit_frequency = localStorage.getItem('visit_frequency');
						user.membership_slab = localStorage.getItem('membership_slab');
						
						if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
							user.firstname = '';
						if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
								user.lastname = '';
						if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
								user.emailid = '';
						if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
								user.dob = '';
						if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
								user.mobile = '';
						if(user.balance=='undefined' || user.balance=='null' || user.balance==null)
								user.balance = '0';
						
								if(localStorage.getItem("categorySelected")=='Distributor')
								{
									//$('#distributorFirstName').val(user.firstname);
									//$('#retailerLastName').val(user.lastname);
									//$('#retailerVehicleOptions').val(user.VehicleOptions);
									$('#distributorCompanyName').val(user.firstname);
									$('#distributorOwnerName').val(user.ownerName);
									$('#distributorGstNo').val(user.gst_no);
									$('#distributorEmailId').val(user.email);
									$('#distributorPincode').val(user.pincode);
									//$('#retailerCity').val(user.city);
									//$('#retailerState').val(user.state);
									//$('#retailerWhereBuy').val(user.WhereBuy);
								}
								else if(localStorage.getItem("categorySelected")=='Workshop')
								{
									//$('#workshopFirstName').val(user.firstname);
									//$('#workshopLastName').val(user.lastname);
									$('#workshopVehicleOptions').val(user.VehicleOptions);
									$('#workshopCompanyName').val(user.firstname);
									$('#workshopOwnerName').val(user.ownerName);
									$('#workshopGstNo').val(user.gst_no);
									$('#workshopEmailId').val(user.email);
									$('#workshopPincode').val(user.pincode);
									//$('#workshopCity').val(user.city);
									//$('#workshopState').val(user.state);
									//$('#workshopWhereBuy').val(user.WhereBuy);
								}
							    else if(localStorage.getItem("categorySelected")=='Retailer')
								{
									//$('#retailerFirstName').val(user.firstname);
									//$('#retailerLastName').val(user.lastname);
									$('#retailerVehicleOptions').val(user.VehicleOptions);
									$('#retailerCompanyName').val(user.firstname);
									$('#retailerOwnerName').val(user.ownerName);
									$('#retailerGstNo').val(user.gst_no);
									$('#retailerEmailId').val(user.email);
									$('#retailerPincode').val(user.pincode);
									//$('#retailerCity').val(user.city);
									//$('#retailerState').val(user.state);
									//$('#retailerWhereBuy').val(user.WhereBuy);
								}
							    else if(localStorage.getItem("categorySelected")=='Mechanic')
								{
									$('#machanicFirstName').val(user.firstname);
									//$('#machanicLastName').val(user.lastname);
									$('#machanicVehicleOptions').val(user.VehicleOptions);
									$('#machanicEmailId').val(user.email);
									$('#machanicCity').val(user.city);
									$('#machanicState').val(user.state);
									$('#machanicPincode').val(user.pincode);
									//$('#machanicDistributor').val(user.Distributor);
								}
							    else if(localStorage.getItem("categorySelected")=='Consumer')
								{
									$('#consumerFirstName').val(user.firstname);
									//$('#consumerLastName').val(user.lastname);
									$('#consumerEmailId').val(user.email);
									$('#consumerCity').val(user.city);
									$('#consumerState').val(user.state);
									$('#consumerPincode').val(user.pincode);
									$('#consumerVehicleMGF').val(user.VehicleMGF);
									$('#consumerVehicleModel').val(user.VehicleModel);
									$('#consumerLUEO').val(user.LUEO);
								}
								else
								{
									toast("Category does't selected");
								}
						
						

							var dob = user.dob.split('-');
							var mm = dob.length == 3 ? dob[1] : '';
							var dd = dob.length == 3 ? dob[0] : '';
							var yyyy = dob.length == 3 ? dob[2] : '';
							
							/*$('#update_dd').val(dd);
							$('#update_mm').val(mm);
							$('#update_yyyy').val(yyyy);*/

						$('#update_email').val(user.emailid);
						//$('#update_dob').val(user.dob);

						// document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;

						if(user.firstname != '' || user.lastname != ''){
							var fn = user.firstname.substring(0, 1);
							var ln = user.lastname.substring(0, 1);
						}

						document.getElementById("sortname").innerHTML= fn+''+ln;

						// **********************************************PROFILE PAGE CHANGES************
						document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
						document.getElementById("profilepts").innerHTML=user.balance;
						document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
						document.getElementById("profilepts1").innerHTML=user.balance;

						var dob = user.dob.split('-');
			            mm = dob.length == 3 ? dob[1] : '';
			            dd = dob.length == 3 ? dob[0] : '';
			            dd1 = dob.length == 3 ? dob[0] : '';
			            yyyy = dob.length == 3 ? dob[2] : '';
			            yyyy1 = dob.length == 3 ? dob[2] : '';
                        $('#dob_update').val(yyyy+'-'+mm+'-'+dd);


						//document.getElementById("homeshort_nm").innerHTML= user.firstname.substring(0, 1);
						document.getElementById("pr_valid").innerHTML = user.validity;
						
						 $("#wait").css("display","none");

						 //$.mobile.changePage( "#gifslider", { transition: "none"} );
						 setTimeout( function() {
							authenticate_new();
						 }, 2000);  // 2 seconds

						 
						if(imageExists('https://taghash.co/idemitsu/uploads/idemitsu_'+localStorage.getItem("usernameidemitsu")+'.jpg'))
						{
							document.getElementById("update_photo1").src='https://taghash.co/idemitsu/uploads/idemitsu_'+localStorage.getItem("usernameidemitsu")+'.jpg';
						}
				 }
				 else if(localStorage.getItem("usernameidemitsu")!=null && localStorage.getItem("usernameidemitsu")!='' && (localStorage.getItem("passwordidemitsu")==null || localStorage.getItem("passwordidemitsu")=='')) 
				 {
						$('#username_new').val(localStorage.getItem("usernameidemitsu"));
						$.mobile.changePage( "#otp_pg", { transition: "none"} );
				 }
				 else
				 {	
						//$.mobile.changePage( "#form-btn-pg", { transition: "none"} );
						$.mobile.changePage( "#login_pg", { transition: "none"} );
				 }
              }
			  else
			  {
                     //$.mobile.changePage( "#form-btn-pg", { transition: "none"} );
					 $.mobile.changePage( "#login_pg", { transition: "none"} );
			  }

});

var toast = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h5>" + msg + "</h5></div>")
            .css({display: "block",
                opacity: 0.97,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                background: "#e31e24",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(1500)
            .fadeOut(400, function () {
                $(this).remove();
            });
}

var toast_p = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h5>" + msg + "</h5></div>")
            .css({display: "block",
                opacity: 0.97,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                background: "#e31e24",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(5500)
            .fadeOut(400, function () {
                $(this).remove();
            });
}

function forget_pswd_confirm()
{ 
		 if($("#tnc-chck1").is(":checked"))
		 {
			forget_pswd();
		 }
		 else
		 {
			toast('Please agree to all terms and conditions');	 
		 }
}

function forget_pswd()
{
	 var mob = $('#forgot_mobile').val();
	 
	 if(mob=='')
	 {
		 toast('Please enter your mobile number');
	 }
	 else if(mob.length==10)
	 {
		 //$.mobile.changePage("#login_pg");
		 $.ajax({
			url: SERVER+'forgot_pswd.asp',
			type: 'GET',
			timeout: 30000,
			data: {'mobileno': mob},
			success: function(data, textStatus, xhr) {
			 console.log(data);
			 console.log(textStatus);
			 if(data.toLowerCase()=='success'){
				 //startWatch();
				 
				 toast('OTP has been sent to your mobile.Please check your SMS.');
			  
				  localStorage.setItem("SMSMNO",mob);
				 
			      //$('#username').val(mob);
				  $('#username_new').val(mob);
				  localStorage.setItem('usernameidemitsu',mob);
				 
				  //$.mobile.changePage("#login_pg_new");
				  $.mobile.changePage("#otp_pg");
				  
              }
			  else
			  {
				 toast(mob+' is not valid.');
				 $('#forgot_mobile').val('');
			  }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				   toast('Could not connect to Server, make sure you are connected to Internet');
				}
		});
  }
  else
  {
	  toast('Please enter 10 digits mobile number');
  }
}

// event.which  : The event.which property returns which keyboard key or mouse button was pressed for the event.
// event.keyCode  : Get the Unicode value of the pressed keyboard key
function onKeyUpEvent(index, event) {
	const eventCode = event.which || event.keyCode;
	if (getCodeBoxElement(index).value.length === 1) {
	  if (index !== 4) {
		getCodeBoxElement(index+ 1).focus();
	  } else {
		getCodeBoxElement(index).blur();
		// Submit code
		console.log('submit code ');
	  }
	}
	if (eventCode === 8 && index !== 1) {
	  getCodeBoxElement(index - 1).focus();
	}
  }
  function onFocusEvent(index) {
	for (item = 1; item < index; item++) {
	  const currentElement = getCodeBoxElement(item);
	  if (!currentElement.value) {
		  currentElement.focus();
		  break;
	  }
	}
  }

  function getCodeBoxElement(index) {
	return document.getElementById('codeBox' + index);
  }

function authenticate_new()
{
  var uname = $('#username_new').val();
  var pwd = $('#codeBox1').val()+$('#codeBox2').val()+$('#codeBox3').val()+$('#codeBox4').val();

  var phno = localStorage.getItem("phno");
    
  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number /Passcode');
 }
 else{
  $.ajax({
   url: SERVER+'mloyallogin_json.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'username': uname, 'password': pwd},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   
	console.log("success"+JSON.stringify(data));

   if(data.status=='success')
   {
    
    user.mobile = uname;
	localStorage.setItem('usernameidemitsu',uname);
    localStorage.setItem('passwordidemitsu',pwd);
	
	var existmemtype = checkforundefined(data.Member_Type);
	if(typeof existmemtype == undefined || existmemtype == null || existmemtype == 'null')
		existmemtype = '';
	console.log('existmemtype: '+existmemtype);

	if((existmemtype != ''))
	{
		if(existmemtype == 'Distributor')
		{
			authenticateDealer();
		}
		else if(existmemtype == 'Workshop')
		{
			authenticateWorkshop();
		}
		else if(existmemtype == 'Retailer')
		{
			authenticateRetailer();
		}
		else if(existmemtype == 'Mechanic')
		{
			authenticateMechanic();
		}
		else if(existmemtype == 'Consumer')
		{
			authenticateConsumer();
		}
	}
	else
	{
		$.mobile.changePage( "#form-btn-pg", { transition: "flip"} );
    }

   }
   else
   {
		 toast('Authenticantion failed');
		 $.mobile.changePage( "#otp_pg", { transition: "flip"} );
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	    toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
     }
   });
  }
}

function authenticate_new2()
{
	var catValue = localStorage.getItem("categorySelected");
	if(catValue!=null && catValue!='' && catValue!=null && catValue!='undefined'){
	if(catValue == 'Distributor')
	{
		authenticateDealer();
	}
	else if(catValue == 'Workshop')
	{
		authenticateWorkshop();
	}
	else if(catValue == 'Retailer')
	{
		authenticateRetailer();
	}
	else if(catValue == 'Mechanic')
	{
		authenticateMechanic();
	}
	else if(catValue == 'Consumer')
	{
		authenticateConsumer();
	}
	else
	{
		toast('Please Select Category');
	}
}
else{
	toast('Please Select Category');
	$.mobile.changePage( "#form-btn-pg", { transition: "flip"} );
}

}
  
function authenticateDistributor()
{
  var uname = $('#username_new').val();
  var pwd = $('#codeBox1').val()+$('#codeBox2').val()+$('#codeBox3').val()+$('#codeBox4').val();

  var phno = localStorage.getItem("phno");
    
  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number /Passcode');
 }
 else{
  $.ajax({
   url: SERVER+'mloyallogin_json.asp', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'username': uname, 'password': pwd},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {

         $('#codeBox1').val('');
         $('#codeBox2').val('');
         $('#codeBox3').val('');
         $('#codeBox4').val('');



   
	console.log("success"+JSON.stringify(data));
   if(data.status=='success'){
    user.balance = data.balance;
    user.firstname = data.firstname;
    user.id = data.id;
    user.lastname = data.lastname;
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	user.trans_sms = data.trans_sms;
	user.mktgsms = data.mktgsms;
	user.cpns = data.cpns;
    user.ads = data.ads;
	user.state = checkforundefined(data.customer_state);
    user.dob = data.dob;
    user.emailid = checkforundefined(data.emailid);
	user.store_code_idemitsu = checkforundefined(data.DealerCode);
	user.def_store = checkforundefined(data.store);
	user.datatype = checkforundefined(data.IdProof_Name);
	user.city = checkforundefined(data.City);
	user.district = checkforundefined(data.Distict);
	user.floor_flat = data.floor_flat;
	user.visit_frequency = data.visit_frequency;
	user.membership_slab = checkforundefined(data.slabid);
	user.uid_idemitsu = checkforundefined(data.uid);
	//user.vehicleno = checkforundefined(data.vehicleno);
	user.distown_code = checkforundefined(data.distributor_code);
	user.docPhoto = checkforundefined(data.kyc_doc_photo);


	user.source = checkforundefined(data.source);
	user.point_claim = checkforundefined(data.point_claim);

	user.ao_code = checkforundefined(data.Area_Office_code);
	user.ao_name = checkforundefined(data.Area_Office_Name);
	user.IsApproved_se = checkforundefined(data.IsApproved);
	user.QtyReqForNextSlab = checkforundefined(data.QtyReqForNextSlab);

	if(user.source=='')
	user.source ='self';

	user.proprietorname = checkforundefined_nonblank(data.ProprietorName);
	user.sapcode = checkforundefined_nonblank(data.SapCode);
    
	user.gender = checkforundefined(data.Gender);
    user.pincode = checkforundefined(data.PostalCode);
	user.address = checkforundefined(data.Address);
	user.userstate = checkforundefined(data.store_state_id);
	user.district11 = checkforundefined(data.district);
	user.aadhar_no =  checkforundefined(data.aadhar_card_no);
    user.adimg_front = checkforundefined(data.aadhar_front_photo);
    user.adimg_back = checkforundefined(data.aadhar_back_photo);
	//user.refer_code = checkforundefined(data.Ref_code);

	
	user.manpower = checkforundefined(data.Manpower);
	user.infrastructure = checkforundefined(data.Infrastructure);
	user.bankaccountno = checkforundefined(data.AccountNo);
	user.gst_no = checkforundefined(data.GstNo);
	user.qualification  = checkforundefined(data.Qualification);
	user.ongoing_sites = checkforundefined(data.OngoingSites);
	user.completed_sites  = checkforundefined(data.CompleteSites);
	user.p_photo = checkforundefined(data.ProfilePphoto);

	if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined')
		user.cpns='0';

	console.log("user.firstname:"+user.firstname);
    
    $('#username').val('');
    $('#password_myacc').val('');
  
   localStorage.setItem('usernameidemitsu',uname);
   localStorage.setItem('passwordidemitsu',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('trans_sms',user.trans_sms);
   localStorage.setItem('mktgsms',user.mktgsms);
   localStorage.setItem('cpns',user.cpns);
   localStorage.setItem('ads',user.ads);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);
   localStorage.setItem('membership_slab',user.membership_slab);
   // localStorage.setItem('passworddd',pwd);

	
 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
 if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';
 if(user.store_code_idemitsu=='undefined' || user.store_code_idemitsu=='null' || user.store_code_idemitsu==null || user.store_code_idemitsu=='')
			user.store_code_idemitsu = 'HO-001';

			//$('#distributorFirstName').val(user.firstname);
			//$('#distributorLastName').val(user.lastname);
			//$('#distributorCode').val(user.code);
			$('#distributorCompanyName').val(user.firstname);
			$('#distributorOwnerName').val(user.ownerName);
			$('#distributorGstNo').val(user.gst_no);
			$('#distributorPanNo').val(user.pan_no);
			$('#distributorEmailId').val(user.email);
			$('#distributorCity').val(user.city);
			$('#distributorState').val(user.state);
			$('#distributorPincode').val(user.pincode);
			$('#distributorCode').val(user.distown_code);
    
	if(user.id != ''){
		var id1 = user.id.substring(0, 4);
		var id2 = user.id.substring(4, 8);
		var id3 = user.id.substring(8, 10);
	}
    if(user.firstname != '' || user.lastname != ''){
		var fn = user.firstname.substring(0, 1);
		var ln = user.lastname.substring(0, 1);
	}
	document.getElementById("sortname").innerHTML= fn+''+ln;
	document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
	document.getElementById("profilepts").innerHTML=user.balance;
    document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
    document.getElementById("profilepts1").innerHTML=user.balance;
	//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
	document.getElementById("pr_valid").innerHTML=user.validity;

	//document.getElementById("firm_nm").innerHTML= user.proprietorname;
	//document.getElementById("sap_code").innerHTML= user.sapcode;


  
	

	/*if(user.p_photo != '')
    {
		if(imageExists(user.p_photo))
		{
			document.getElementById("update_photo").src = user.p_photo;
			document.getElementById("update_photo_self").src = user.p_photo;
			document.getElementById("update_photo1").src = user.p_photo;
			localStorage.setItem('file_pphoto',user.p_photo);
		}
	}*/
	

	if(user.dob!='')
	{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob').val(yyyy+'-'+mm+'-'+dd);
		
	}

	 if(user.docPhoto != '')
	 {
		if(imageExists(user.docPhoto))
		{
			//document.getElementById("shop_photo").src = versionurl+'uploads/'+user.panphoto;
			document.getElementById("kycdoc_photo2").src = user.docPhoto;
			localStorage.setItem('docimg',user.docPhoto);
		}
	 }

	
	var editPage = document.getElementById("editProfile_page");
	var profilePage = document.getElementById("footerProfilePage");
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
	{
		//document.getElementById('update_firstname').readOnly = false;
	    //document.getElementById('update_lastname').readOnly = false;

		var editPage = document.getElementById("editProfile_page");
		//var profilePage = document.getElementById("footerProfilePage");

		if(localStorage.getItem("categorySelected")=='Distributor')
			{
				editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
				//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-distributor"><img src="assets/images/app_images/profile.png"></a></div>';
				$.mobile.changePage( "#page-form-distributor", { transition: "flip"} );
			}
		else if(localStorage.getItem("categorySelected")=='Workshop')
			{
				editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
				//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-workshop"><img src="assets/images/app_images/profile.png"></a></div>';
				$.mobile.changePage( "#page-form-workshop", { transition: "flip"} );
			}
		else if(localStorage.getItem("categorySelected")=='Retailer')
			{
				editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
				profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-retailer"><img src="assets/images/app_images/profile.png"></a></div>';
				$.mobile.changePage( "#page-form-retailer", { transition: "flip"} );
			}
		else if(localStorage.getItem("categorySelected")=='Mechanic')
			{
				editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
				//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-machanic"><img src="assets/images/app_images/profile.png"></a></div>';
				$.mobile.changePage( "#page-form-machanic", { transition: "flip"} );
			}
		else if(localStorage.getItem("categorySelected")=='Consumer')
			{
				editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
				//profilePage.innerHTML='<a href="#page-form-consumer"><li><div class="fthumb-icon"><img src="assets/images/app_images/profile.png"></div>Profile</li></a>';
				$.mobile.changePage( "#page-form-consumer", { transition: "flip"} );
			}
			else{
				toast("Category does't selected");
			}

		// $.mobile.changePage( "#page-forgot-password", { transition: "flip"} );
    }
    else
    {
		   
	    /*if(localStorage.getItem("profiledone_idemitsu"))
		{
			
			if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
			{
				document.getElementById("profilenm").innerHTML= 'Guest';
				document.getElementById("profilenm1").innerHTML='Guest';
			}
			else
			{
				document.getElementById("sortname").innerHTML= fn+''+ln;
				document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
				document.getElementById("profilepts").innerHTML=user.balance;
				document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
				document.getElementById("profilepts1").innerHTML=user.balance;
				//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
				//document.getElementById("pr_valid").innerHTML=user.validity;
					
			}

			$.mobile.changePage( "#homepage", { transition: "flip"} );
		}
		else
		{
			 $.mobile.changePage( "#profilepage", { transition: "flip"} );
		}*/
		if(localStorage.getItem("categorySelected")!==null && localStorage.getItem("categorySelected")!='null' && localStorage.getItem("categorySelected")!='' && localStorage.getItem("categorySelected")!='undefined')
		{
			var editPage = document.getElementById("editProfile_page");
			//var profilePage = document.getElementById("footerProfilePage");

			if(localStorage.getItem("categorySelected")=='Distributor')
			{
				editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
				//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-distributor"><img src="assets/images/app_images/profile.png"></a></div>';
			}
		else if(localStorage.getItem("categorySelected")=='Workshop')
			{
				editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
				//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-workshop"><img src="assets/images/app_images/profile.png"></a></div>';
			}
		else if(localStorage.getItem("categorySelected")=='Retailer')
			{
				editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
				//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-retailer"><img src="assets/images/app_images/profile.png"></a></div>';
			}
		else if(localStorage.getItem("categorySelected")=='Mechanic')
			{
				editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
				//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-machanic"><img src="assets/images/app_images/profile.png"></a></div>';
			}
		else if(localStorage.getItem("categorySelected")=='Consumer')
			{
				editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
				//profilePage.innerHTML='<a href="#page-form-consumer"><li><div class="fthumb-icon"><img src="assets/images/app_images/profile.png"></div>Profile</li></a>';
			}

			$.mobile.changePage( "#homepage", { transition: "flip"} );
		}else{
			toast("Category does't selected");
			logoutApp();
		}
		
    }

   }
   else
   {
		 toast('Authenticantion failed');
		 $.mobile.changePage( "#form-btn-pg", { transition: "flip"} );
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernameidemitsu');
	pwd = localStorage.getItem('passwordidemitsu');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    user.trans_sms = localStorage.getItem('trans_sms');
    user.mktgsms = localStorage.getItem('mktgsms');
    user.cpns = localStorage.getItem('cpns');
    user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
    /*document.getElementById("pr_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	//document.getElementById("pr_valid").innerHTML=user.validity;*/
	   if(localStorage.getItem("imagedata")!=null)
	   {
		//document.getElementById("cardImagemenu").src = localStorage.getItem("imagedata");
		//document.getElementById("cardImagepunch").src = localStorage.getItem("imagedata");
	   }
     }
   });
  }
}

function checkforundefined(str)
{
    if(typeof str==undefined || str=='undefined'|| str==null || str=='null')
    {
        str='';
    }
        return str;
}

function checkforundefined_nonblank(str)
{
    if(typeof str==undefined || typeof str==null || str=='undefined'|| str==null || str=='null')
    {
        str= '';
    }
        return str;
}

function imageExists(image_url)
{
    /*var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();
    return http.status != 404;*/

	return true;
}
function gotomessages()
	{
		$("#message").css('display', 'block');
		$("#membership2").css('display', 'none');
		$("#rewards").css('display', 'none');
		$("#points").css('display', 'none');

		//$('a[href="#weekly"]').trigger("click");	
		//$("#sidebar").panel("close")
		$.mobile.changePage( "#my_membership", { transition: "none"} );
		showTabContent('inbox', 'msg_history_json.asp');
		//$("#contest_tabs").tabs( "option", "active", 1 );

		document.getElementById("tab1").classList.remove("is-active");
		document.getElementById("tab2").classList.add("is-active");
		document.getElementById("tab3").classList.remove("is-active");
		//document.getElementById("tab4").classList.remove("is-active");
	}

	function showTabContent(id, url) {
		console.log("url -> "+url);
		var tabserver='';
			if(id=='rewardstore' || id=='reward-cat' || id=='reward-brand')
			{
				tabserver = "https://idemitsu.mloyalretail.com/Rewards/";
			}
			else
			{
				tabserver = "https://idemitsu.mloyalretail.com/m/";
			}
			console.log("tabserver ->"+tabserver);
			console.log("user.mobile ->"+user.mobile);
			$.getJSON(
				tabserver+url, {
				//page: url,
				mno : user.mobile
				// mno : 9876543210
			}, function (json) {
			   console.log("SSSS"+JSON.stringify(json));
					
				renderTemplate(id, json);
			}).error(function () {
				alert("Error: Could not connect to Server, make sure you are connected to Network");
			});
		}

		function gotomembership()
		{
	
			$("#message").css('display', 'none');
			$("#membership2").css('display', 'block');
			$("#rewards").css('display', 'none');
			$("#points").css('display', 'none');
	
			//$("#sidebar").panel("close");
			renderTemplatedetail('aboutus');
			$.mobile.changePage( "#my_membership", { transition: "none"} );	
			//$("#contest_tabs").tabs( "option", "active", 0 );		
	
			document.getElementById("tab1").classList.add("is-active");
			document.getElementById("tab2").classList.remove("is-active");
			document.getElementById("tab3").classList.remove("is-active");
			//document.getElementById("tab4").classList.remove("is-active");
		}


		function renderTemplatedetail(pageID) {
			var str = '';
			
			
			
				switch (pageID) {
					
					
		case 'aboutus':

			console.log('cardname:-'+user.firstname+' '+user.lastname);
			document.getElementById("cardname").innerHTML = user.firstname+' '+user.lastname;
			//document.getElementById("cardname").innerHTML = user.firstname;
		    var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
			
			var mobileqr = '';
			if(user.mobile==null || user.mobile=='' || user.mobile=='undefined')
			{
				mobileqr = 'Guest';
			}
			else
		    {
				mobileqr = user.mobile;
			}

		    // document.getElementById("cardid").innerHTML = uuu;
		    //document.getElementById("valid").innerHTML = 'Valid Thru:'+user.validity;
			//document.getElementById("tpoint").innerHTML = user.balance;
			document.getElementById("barimg").innerHTML = '<img src="https://quickchart.io/qr?text='+mobileqr+'&size=80&margin=2" class="img-responsive" />';

			/*if(user.membership_slab=='1' || user.membership_slab=='')
            {
               document.getElementById('baseslab').className = '';
               document.getElementById('silverslab').className = '';
			   document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';

		       document.getElementById('baseslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Base Member';
            }
            else if(user.membership_slab=='2')
            {
               document.getElementById('baseslab').className = '';
               document.getElementById('silverslab').className = '';
			   document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';

		       document.getElementById('silverslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Silver Member';
            }
			else if(user.membership_slab=='4')
            {
               document.getElementById('baseslab').className = '';
               document.getElementById('silverslab').className = '';
			   document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';

		       document.getElementById('goldslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Gold Member';
            }
			else if(user.membership_slab=='3')
            {
               document.getElementById('baseslab').className = '';
               document.getElementById('silverslab').className = '';
			   document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';

		       document.getElementById('platinumslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Platinum Member';
            }*/

			setUserbalance_aboutus();
        

			break;
			
					case 'page-card':
						
						document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
						//document.getElementById("welcomehome").innerHTML = 'Welcome '+user.firstname+' '+user.lastname;
						document.getElementById("cardname").innerHTML = user.firstname+' '+user.lastname;
						var uuu='';
						for(var i=0;i<user.id.length;i++)
						{
						 if(i%4==2)
							{
							 uuu = uuu + user.id.charAt(i) +'  ';
							}
						 else
							{
							 uuu = uuu + user.id.charAt(i);
							}
						}
						document.getElementById("cardid").innerHTML = uuu;
						document.getElementById("valid").innerHTML = user.validity;
						var ustr = user.balance;
						var tstr = '';
						if(ustr.length<=8)
					   {
						 for (var k=0;k<(8-ustr.length); k++)
						{
						tstr += '<span class="bdrht" style="">0</span>';
						}
					   }
						for (var j=0;j<ustr.length; j++)
						{
						tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
						}
						
						document.getElementById("tpoint").innerHTML = tstr;
						document.getElementById("barimg").innerHTML = '<img src="http://delhidaredevilsadda.com/barcode.php?text='+user.mobile+'" style="padding:5px;border: solid 1px #ffffff;border-radius: 1px;background:#ffffff;" />';
			
						document.getElementById("headername").innerHTML='Membership';
						 
						break;
			
			
						case 'page-card-punch':
						
						
			
			
									document.getElementById("barcontentpunch").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
						//document.getElementById("welcomehome").innerHTML = 'Welcome '+user.firstname+' '+user.lastname;
						document.getElementById("cardnamepunch").innerHTML = user.firstname+' '+user.lastname;
						var pstr='<span style="color:#ffffff;"><br><br>';
						console.log("user.visit_frequency)"+user.visit_frequency);
						//user.visit_frequency='2';
						console.log("parseInt(user.visit_frequency)"+parseInt(user.visit_frequency));
						 for (var k1=0;k1<parseInt(user.visit_frequency); k1++)
						{
						pstr += '<img src="img/star11.png"/>';
						}
						 for (var k1=0;k1<10-parseInt(user.visit_frequency); k1++)
						{
						pstr += '<img src="img/star.png"/>';
						}
						pstr +='</span>'
						console.log("pstr"+pstr);
			
			
			
						document.getElementById("card_punches").innerHTML =pstr;
						var uuu='';
						for(var i=0;i<user.id.length;i++)
						{
						 if(i%4==2)
							{
							 uuu = uuu + user.id.charAt(i) +'  ';
							}
						 else
							{
							 uuu = uuu + user.id.charAt(i);
							}
						}
					   
						var ustr = user.balance;
						var tstr = '';
						if(ustr.length<=8)
					   {
						 for (var k=0;k<(8-ustr.length); k++)
						{
						tstr += '<span class="bdrht" style="">0</span>';
						}
					   }
						for (var j=0;j<ustr.length; j++)
						{
						tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
						}
						
						document.getElementById("tpointpunch").innerHTML = tstr;
						
						document.getElementById("headernamepunch").innerHTML='Membership';
						break;
			
						case 'shop':
						str +='<ul data-role="listview" id="ul_shop" class="ul_shop" data-icon="false" data-iconpos="none">';
						str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S1\');" class="lt_shop_a"><h2>Khazana</h2></a></li>';
						str +='</ul>';
						
						$("#" + pageID + " .ui-content").html(str);
				$('#ul_shop').listview();
			   break;
			  
				}
				}

				function setUserbalance_aboutus()
				{
					 $.ajax({
						url: SERVER+'points_history_json.asp',
						type: 'GET',
						timeout: 50000,
						dataType: 'json',
						data: {'mno': user.mobile},
						complete: function(xhr, textStatus) {
						   //called when complete
						},
						success: function(data, textStatus, xhr) {
				
							//console.log('JSONDATA:'+JSON.stringify(data));
							document.getElementById("tpoint").innerHTML = data.balance;
							document.getElementById("profilepts").innerHTML = data.balance;
							document.getElementById("profilepts1").innerHTML = data.balance;
							document.getElementById("transactions_bal").innerHTML = data.balance;
							//document.getElementById("blink_div").innerHTML = 'You need '+data.move_nxt_pts+' points to move to the next tier';
							
							
						},
						error: function(xhr, textStatus, errorThrown) {
							toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
						}
					  });
				}


		
function renderTemplate(pageID, json) {
	var str = '';
	var str1 = '';
	var oth = document.getElementById("othercontent");
    var main = document.getElementById("cardcontent");

	console.log('pageID'+pageID);
	switch (pageID) {
	case 'loyalty':
				
		str += '<br/><div class="pts_new"><span>' + json.balance + '</span></div>';   
        str += '<p class="tpts">Total Points</p>';
        str += '<a href="javascript:purchaseHistory();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="assets/images/earned-points.png" alt="img" class="eIcon"><span>Earned Points :' + json.earnpoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></a>';
        str += '<a href="javascript:redeemHistory();" id="ptsRedeem" class="ui-btn ui-corner-all"><img src="assets/images/redeemed-points.png" alt="img" class="rIcon"><span>Redeemed Points :' + json.burnpoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></span></a>';
		str += '<a href="javascript:bonusHistory();" id="ptsBonus" class="ui-btn ui-corner-all"><img src="assets/images/earned-points.png" alt="img" class="rIcon"><span>Bonus Points :' + json.bonuspoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></span></a>';
	
		//str += '<a href="#" id="ptsEarn1" class="ui-btn ui-corner-all"><img src="assets/images/earned-points.png" alt="img" class="eIconT"><span class="ernPt1">Earned Points :' + json.earnpoints + '</span><span class="rdmPt1">Redeemed Points :' + json.burnpoints + '</span><span class="purchaseBtnTxt1">My Purchase History</span></a>';
		
		
		
		str += '<div id="purchaseHistory" style="display:none;">';
		str+='<hr><span class="phist">Purchase History</span><hr>';
		for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">EARNED POINTS <span class="ptsRed">'+json.data[i].earn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].earn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';
		
		
		str += '<div id="redeemHistory" style="display:none;">';
		str+='<hr><span class="phist">Redeem History</span><hr>';
        for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
		    str +='<caption><span style="float:left;">REDEEM POINTS <span class="ptsRed">'+json.data[i].burn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].burn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
	    str +='</div>';


		str += '<div id="bonusHistory" style="display:none;">';
		str+='<hr><span class="phist">Bonus History</span><hr>';
		for(var i=0;i<json.bonus.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">BONUS POINTS <span class="ptsRed">'+json.bonus[i].bonuspoints+'</span></span>  <span class="cap_date">'+json.bonus[i].createdon+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.bonus[i].bonuspoints+'</td><td>'+json.bonus[i].flag+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';

        document.getElementById("points").innerHTML=str;   
		
		
		break;

	case 'loyaltynew':
		
	    str += '<div class="p-3">';
		str += '<div class="pts"><span>' + json.balance + '</span></div>';   
        str += '<p class="tpts">Total Points</p>';

		str += '<a href="javascript:purchaseHistory();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="assets/images/pointredeem.png" alt="img" class="eIcon"><span>Earned Points : ' + json.earnpoints + '</span></a>';
		str += '<a href="javascript:redeemHistory();" id="ptsRedeem" class="ui-btn ui-corner-all"><img src="assets/images/pointredused.png" alt="img" class="eIcon"><span>Redeemed Points : ' + json.burnpoints + '</span></a>';
		str += '<a href="javascript:bonusHistory();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="assets/images/pointredeem.png" alt="img" class="eIcon"><span>Bonus Points : ' + json.bonuspoints + '</span></a>';
		str += '</div>';
		
		str += '<div id="purchaseHistory" style="display:none;">';
		str+='<hr><span class="phist">Earned History</span><hr>';
		for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">EARNED POINTS <span class="ptsRed">'+json.data[i].earn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].earn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';
		
		
		str += '<div id="redeemHistory" style="display:none;">';
		str+='<hr><span class="phist">Redeem History</span><hr>';
        for(var i=0;i<json.redeem.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
		    str +='<caption><span style="float:left;">REDEEM POINTS <span class="ptsRed">'+json.redeem[i].redeempoints+'</span></span>  <span class="cap_date">'+json.redeem[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.redeem[i].redeempoints+'</td><td>'+json.redeem[i].billnumber+'</td></tr>';
			str +='</tbody></table><br/>';
		}
	    str +='</div>';


		str += '<div id="bonusHistory" style="display:none;">';
		str+='<hr><span class="phist">Bonus History</span><hr>';
		for(var i=0;i<json.bonus.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">BONUS POINTS <span class="ptsRed">'+json.bonus[i].bonuspoints+'</span></span>  <span class="cap_date">'+json.bonus[i].createdon+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.bonus[i].bonuspoints+'</td><td>'+json.bonus[i].flag+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';

		str +='<div class="tax_txt mt-20 mb-10" onclick="javascript:openTax_doc();"><b>Disclaimer</b>: TDS will be applicable u/s 194R of Income Tax Act</div>';

        document.getElementById("points").innerHTML=str;   
		
		
		break;

	case 'specials':
		console.log(JSON.stringify(json));

		if(json.length == 0)
		{
			str = '<div style="text-align:center;">No Events Found</div>';
		}
		else
		{
			str += '<div class="whats_new_slider owl-carousel owl-theme">';

			for (var i=0;i<json.length;i++ )
			{
			
			    console.log('Video:'+json[i].AdVideoURL);
			    if(json[i].AdVideoURL=='' || json[i].AdVideoURL==null  || json[i].AdVideoURL=='null')
				{
				    str += '<div class="wn_offer">';
					str += '<a href="#">';
					str += '<img src='+SERVER+json[i].AdImgURL+' alt="" class="img-responsive" />';
				    str += '</a>';
				    str += '</div>';
				}
				else
				{
					 console.log('Img:'+json[i].AdVideoURL);
					//str += '<div class="whats_new_slider owl-carousel owl-theme">';
					//str += '<div class="specials7"><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p>';
					str += '<video width="320" height="240" controls="controls" poster='+SERVER+json[i].AdImgURL+' onClick=this.play();><source src='+SERVER+json[i].AdVideoURL+'  this.play();/></video>';
					//str += '</div></div>';
					//str += '</div>';
					
				}
			}

			str += '</div>';
		}
        
		document.getElementById("whatsnew_div").innerHTML=str;
		
		var _owl2 = $(".whats_new_slider");
		setTimeout(function(){
 			_owl2.owlCarousel({
				items:1,
						loop:false,
						margin:0,
						//merge:true,
						nav:false,
						dots:false,
						autoplay:true,
						autoWidth:false,
						navText: ['<','>']
			});
		}, 100);

		
		break;
	case 'coupons':
		str = '';


        if (json.data.length == 0) 
		 {
                str = '<span style="text-align:center;margin: 0 auto;display: block;">No Coupons Found</span>';
         }
		else
		 {
		   for(var i=0;i<json.data.length;i++)
		{
            str += '<div class="px-3 pb-3">';

            if(json.data[i].couponstatus == 'Active')
            {
                str += '<div class="coupon active">';
            }
            else
            {
                str += '<div class="coupon inactive">';
            }


			str += '<div class="d-flex align-items-center justify-content-between">';
			str += '<div class="w-80">';
			str += '<h2 class="coupon_code">'+json.data[i].couponcode+'</h2>';
			str += '<h3 class="validity">Valid Till : <span>'+json.data[i].validtill+'</span></h3>';
			str += '<h3 class="coupon_no">Coupon Detail : '+json.data[i].offername+'</h3>';
			str += '<a href="#tnc">T&amp;C* </a>';
			str += '<div class="coupon_state"></div>';
		    str += '</div>';
			str += '<div class="w-20">';
			str += '<div class="qr_code"><img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+json.data[i].couponcode+'&choe=UTF-8" alt="" /></div>';
			str += '</div>';
			str += '</div>';

            str += '</div>';
			str += '</div>';
		
		}
		}
		//str += '</ul>';
		document.getElementById("rewards").innerHTML=str;
		break;

	case 'inbox':
		console.log('json'+JSON.stringify(json));
		
		str +=' <ul id="MsgUl" class="messages">';
		for(var i=0;i<json.length;i++ )
		{

			str += '<li>';
			str += '<div class="msg_img">';
			str += '<img src="assets/images/open.png" alt="" class="msgImg"/>';
			str += '</div>';
			str += '<div class="MsgBlk">';
			str += '<div class="MsgBdr">';
			str += '<span class="msghdr">DM-IDEMITSU</span>';
			str += '<span class="msgTime">'+json[i].msgtime+'</span>';
			str += '<span class="msgDate">' + json[i].msgdate + '</span>';
			str += '</div>';
			str += '<div class="msg_body">';
			str += '<span class="msgTxt">'+json[i].msg+'</span>';
			str += '</div>';
			str += '</div>';
			str += '</li>';
	
		}
		
		str +='</ul>';
		document.getElementById("message").innerHTML=str;
		break;

	case 'inbox_not':
		console.log('json'+JSON.stringify(json));
		for(var i=0;i<json.length;i++ )
		{
			str +='<div class="notifi-date" id="notifi_date">'+json[i].msgdate+'</div>';
			str +='<div class="notifi-content">';
			str +='<h3 id="notifi_heading">IDEMITSU</h3>';
			str +='<p id="notifi_content">'+json[i].msg+'</p>';
			str +='<br><span class="notifi-old">'+json[i].msgtime+'</span>';
			str +='</div>';
	
		}
		
		document.getElementById("notification_message").innerHTML=str;
		break;


		case 'centre':
   //console.log('inside centre');
      console.log('json'+JSON.stringify(json));
  
  str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator_sub" id="ul_locator_sub">';
  for (var i=0;i<json.length;i++ )
  {
   var storecontact=json[i].storephone;
   var custcare=json[i].CustomerCare;
   if(storecontact==null)
    storecontact='';
   if(custcare==null)
    custcare='';

   if(json[i].storename.indexOf('Email Admin')==0 || json[i].storename.indexOf('ONLINE')==0 || json[i].storename.indexOf('online')==0 || json[i].storename.indexOf('Paytm App Store')==0 || json[i].storename.indexOf('ShortCode')==0 || json[i].storename.indexOf('Mobile App')==0 || json[i].storename.indexOf('Paytm Store')==0|| json[i].storename.indexOf('MicroSite')==0|| json[i].storename.indexOf('test')==0)
				continue;
   
  
      str += '<li data-icon="false" class="storeList"><h3 class="storeName">'+json[i].storename+','+json[i].storelocation+'</h3><span class="callout1">'+json[i].storeaddress+'</span><br/><br/>';
   if(storecontact!='')
   {
   str += '<a href="tel:'+storecontact+'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external" style="background: #ffffff; border: #ffffff; color: #999;font-weight: normal;  font-size: 13px;">'+storecontact+'</a>';
   }
  if(custcare!='')
   {
   str +='<a href="tel:'+custcare+'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external" style="background: #ffffff; border: #ffffff; color: #999;font-weight: normal;  font-size: 13px;">'+json[i].CustomerCare+'</a>';
   }

  //str +='<div  id=map-canvas'+i+' style="height:250px;width:95%;margin: 0 auto;">';

  str +='</li>';



  
  
  //alert(str);
  //str += '<li data-icon="false" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;">'+json[i].storename+','+json[i].storelocation+'<br/><span class="callout1">'+json[i].storeaddress+'</span><br/><br/><a href="tel:'+json[i].storephone+'\'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a><a href="javascript:showTabContent_Map(\''+json[i].storeaddress+'\');" data-role="button" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></li>';
        //str += '<li data-icon="false"><span class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</span><br/><span class="callout1">'+json[i].storeaddress+'</span><br/><div class="ui-grid-a"><div class="ui-block-a"><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a></div><div class="ui-block-b"><a href="#" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></div></div></li>';
  //str += '<div class="center-box"><div class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</div><div class="callout1">'+json[i].storeaddress+'<br/><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" data-role="button" rel="external">'+json[i].storephone+'</a></div></div>';
  
  }
  //str +='<div  id=map-canvas'+i+' style="height:250px;width:250px;">';
  str += '</ul>';
  
  document.getElementById("stor").innerHTML=str;

	  /*for (var i=0;i<json.length;i++ )
	  {
			if(json[i].storename.indexOf('Email Admin')==0 || json[i].storename.indexOf('ONLINE')==0 || json[i].storename.indexOf('online')==0 || json[i].storename.indexOf('Paytm App Store')==0 || json[i].storename.indexOf('ShortCode')==0 || json[i].storename.indexOf('Mobile App')==0 || json[i].storename.indexOf('Paytm Store')==0|| json[i].storename.indexOf('MicroSite')==0|| json[i].storename.indexOf('test')==0)
			continue;

			var lat1  = checkforundefined(json[i].storelatitude);
			var long1 = checkforundefined(json[i].storelongitude);
			var add   = lat1+','+long1;
	   

		   showTabContent_Map_latlong(lat1,long1,i);
	  }*/
	   
	 $('#ul_locator_sub').listview();

  break;
		
	case 'defstore':
		//console.log('inside default store'+user.def_store);
	     console.log('json'+JSON.stringify(json));
		//str +='<div  style="text-align:center;width:100%;"><img src="img/c-logo.png" width="137" height="44" /></div>';
		str += '<h2 align="center" style=\"color:#ff0000;font-size:14px;font-weight:normal;\">Default Store : '+user.def_store+'</h2>';
		str += '<a href="#citylist" data-role="button" data-theme="reset" class="ios">View All Stores</a>';
		str += '<h3 align="center" style=\"color:#ff0000;font-size:14px;font-weight:normal;\">Other Stores in your city</h3><h3></h3>';
		//$("#" + pageID + " .ui-content").html(str);
		$("#" + pageID + " .ui-content").html(str+$.render[pageID](json));
		$("a[data-role='button']").button();
		break;
	case 'citylist':
		//console.log('inside citylist');
	    console.log('json'+JSON.stringify(json));
		
        str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator" id="ul_locator">';
		for (var i=0;i<json.data.length;i++ )
		{
			if(json.data[i].cityid!='9')
			{
				cityidarr[i]=json.data[i].cityid;
				cityarr[i]=json.data[i].cityname;
				//str +='<a href="javascript:getCityId('+json.data[i].cityid+');" data-role="button"  data-theme="reset" class="ios">'+json.data[i].cityname+'</a>'
				str += '<li data-icon="false"><a href="javascript:getCityId('+json.data[i].cityid+');" class="ui-btn ui-icon-location ui-btn-icon-left ui-shadow ui-corner-all">'+json.data[i].cityname+'</a></li>';
			}
		}
		str += '</ul>';
		document.getElementById("stor").innerHTML=str;
		  
        $('#ul_locator').listview();
		//$("a[data-role='button']").button();
		break;

	case 'merchandise':
	  console.log(JSON.stringify(json));
	  
	  /*str += '<h3>Merchandise</h3>';


	  for (var i=0;i<json.length;i++ )
	  {
			
	   str += '<div><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p><video width="320" height="240"  poster='+json[i].AdImgURL+' onClick=this.play();><source src='+SERVER+json[i].AdVideoURL+'  this.play();/></video><br/><hr/> <a href="#" data-role="button" id="forgot_button">Order</a></div></div>';

	  }


	  $("#" + pageID + " .ui-content").html(str);*/
	  break;
case 'categorylist':
   console.log(JSON.stringify(json));

  //str = str +'<div class="subheading_t" style="font-size:14px;"><div style="color:#555555;">Welcome '+user.firstname+'</div><div class="submenu_button_right" ><img src="img/coupons.png" style="height:26px;width:auto;"></div></div>';
  str +='<img src="img/rstore.png" style="width:97%;height:auto;"><br/>';
  //str +='<div id="rss_desc1"><ul>';
 // str +='<ul>';
  // for (var i=0;i<json.length;i++ )
  //{
  //str +='<li><a href="javascript:getCatDetails('+json[i].Catid+');" data-theme="reset" class="ios" style="background: url(../img/shop_categoryList.png);height: 78px;color:#000;">'+json[i].CatName+'</a></li>';
  //str +='<li class="s_cn"><a href="javascript:getCatDetails('+json[i].Catid+');" style="background-image: url(../img/s_cn.png);color:#000;text-align:center;">'+json[i].CatName+'</a></li>';
  //}
 // str +='</ul>';
  //str +='</ul></div>';
  $("#" + pageID + " .ui-content").html(str);

  $("a[data-role='button']").button();
   break;
	  case 'rewardsmain':
		
		 $("#" + pageID + " .ui-content").html(str);
		break;
	  case 'viewcart':
		
		//str += '<div class="cartinfo">You have '+json.cartdata.length+' items in your cart</div>';
		
		str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator_sub" id="cartlist">';
        for (var i=0;i<json.cartdata.length;i++ )
		{
		
		
		str += '<li data-icon="delete" data-iconpos="right" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;line-height:90px;"><img src='+json.cartdata[i].url+' style="width: 100px;height: 100px;padding: 5px;"/>'+json.cartdata[i].BrandName+' Offer,Cost:Rs. '+json.cartdata[i].BrandValue+'<br/><span class="callout1">'+json.cartdata[i].BrandDescription+'</span></li>';
        																																					   
																																							   
		
		//	str +='<li><div class="li-img"><img src='+json.cartdata[i].url+' /></div><div class="li-text"><h4 class="li-head">'+json.cartdata[i].BrandName+' Offer,Cost:Rs. '+json.cartdata[i].BrandValue+'</h4><br/><p class="li-sub">'+json.cartdata[i].BrandDescription+'</p></div></li>';
            
		}
		str += '</ul>';
		
		str += '<br clear="all" /><a href="#" data-role="button" id="view_cart" class="btnclass">Redeem</a>';
		console.log("str herrrrrr"+str);
		oth.innerHTML=str; oth.style.display = 'block';  
		 $('#cartlist').listview();
		 $('#view_cart').button();
		break;

	case 'rewardstore':
    
  
       
	  jsonary = json.data;
  
  // str += '<div class="ui-content rsbanner"><span class="vouchers"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" class="vouchers" id="vouchers"'+i+'/></a></span><img src="img/featured.png" class="rs_b1" /></div>';
          
  for (var i=0;i<json.data.length;i++ )
  {

   if(json.data[i].BrandDescription=='Featured')
   {
   
   str += '<div class="ui-content rsbanner"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src='+json.data[i].url+' class="rs_b1" /></div>';
   }
   else
   {

   
   //str += '<div class="ui-content rs_msg"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src="http://portico.mloyalengage.com/'+json.data[i].brand_logo+'" class="rs_b2"></div>';
   str += '<div class="ui-content rs_msg"><img src="" class="rs_b2"><div class="amount_date"> <b>Rs. '+json.data[i].gift_voucher_value+'</b><br/>Valid Thru : '+json.data[i].end_date+'</div></div>';
   
   str += '<div class="ui-grid-a msg_cont"><div><img src="'+SERVER1+json.data[i].brand_logo+'" class="img_blogo1"></div><div class="ui-block-a wid20"></div>';
   

   str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">'+json.data[i].brand_name+' </span><br/>';
   str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">Friday at 10:40 am </span><br/></div>';
   str += '<div class="ui-block-b wid40"><div class="flt_rght">';
   //str += '<a href="javascript:likeMessage_rewards(\''+json.data[i].brand_id+'\',\''+i+'\');" data-role="button"><span id="likingrewards'+i+'"><img src="img/msg_up.png"></span></a>';
   str += '<span><a href="javascript:shareMessage(\''+json.data[i].brand_description+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
   str += '</div></div></div><hr class="style-one">';
   str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json.data[i].brand_description;
   str += '</span></div></div></div></div>';
   str += '<div class="ui-grid-solo msg_like_comt"><div class="rs_lk_cmt">';
 //  str += '<span class="msg_lke"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   str += '<span class="msg_lke"><a href=\'javascript:getVoucher('+json.data[i].gv_id+','+json.data[i].gift_voucher_value+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   }

 
  }
  //str +='Coming Soon';
  
   oth.innerHTML=str; oth.style.display = 'block';  
    break;
 case 'reward-cat':
   str +='<ul data-role="listview" id="ul_reward-cat" class="ul_shop" data-icon="false" data-iconpos="none">';
   for(var i=0;i<json.data.length;i++)
  {
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showcatbrands('+json.data[i].catid+');" class="lt_shop_a"><h2>'+json.data[i].catname+'</h2></a></li>';
  }
 str +='</ul>';
 //str +='Coming Soon';
    $("#" + pageID + " .ui-content").html(str);
    $('#ul_reward-cat').listview();
   break;
   case 'reward-brand':
   for (var i=0;i<json.data.length;i++ )
  {

   if(json.data[i].BrandDescription=='Featured')
   {
   
   str += '<div class="ui-content rsbanner"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src='+json.data[i].url+' class="rs_b1" /></div>';
   }
   else
   {

   
   //str += '<div class="ui-content rs_msg"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src="http://portico.mloyalengage.com/'+json.data[i].brand_logo+'" class="rs_b2"></div>';
   str += '<div class="ui-content rs_msg"><img src="" class="rs_b2"><span class="amount_date"> <b>Rs. '+json.data[i].gift_voucher_value+'</b><br/>Valid Thru : '+json.data[i].end_date+'</span></div>';
   
   str += '<div class="ui-grid-a msg_cont"><div><img src="'+SERVER1+json.data[i].brand_logo+'" class="img_blogo1"></div><div class="ui-block-a wid20"></div>';
   

   str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">'+json.data[i].brand_name+' </span><br/>';
   str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">Friday at 10:40 am </span><br/></div>';
   str += '<div class="ui-block-b wid40"><div class="flt_rght">';
  // str += '<a href="javascript:likeMessage_rewards(\''+json.data[i].brand_id+'\',\''+i+'\');" data-role="button"><span id="likingrewards'+i+'"><img src="img/msg_up.png"></span></a>';
   str += '<span><a href="javascript:shareMessage(\''+json.data[i].brand_description+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
   str += '</div></div></div><hr class="style-one">';
   str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json.data[i].brand_description;
   str += '</span></div></div></div></div>';
   str += '<div class="ui-grid-solo msg_like_comt"><div class="rs_lk_cmt">';
   //str += '<span class="msg_lke"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   str += '<span class="msg_lke"><a href=\'javascript:getVoucher('+json.data[i].gv_id+','+json.data[i].gift_voucher_value+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   }

 
  }
            $("#" + pageID + " .ui-content").html(str);
   break;
			
    case 'socialwall_youtube':
		
		//str += '<a href=\"javascript:loadDataGal(\''+gallery_cat+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><span><img src=\"img/cheer/refresh.png\" /></span></a></div>';
		
		for (var i=0;i<json.length;i++ )
		{
			//console.log(JSON.stringify(json[i]));
        if(json[i].link!='')
			{

			//console.log(json[i].link[1].href);
			//console.log(json[i].link[1].href.indexOf("videos/")+7);

			//console.log(json[i].link[1].href.substring(json[i].link[1].href.indexOf("videos/")+7,json[i].link[1].href.indexOf("/related")));
			

			 str1="http://www.youtube.com/embed/"+json[i].link[1].href.substring(json[i].link[1].href.indexOf("videos/")+7,json[i].link[1].href.indexOf("/related"));
			 //console.log(str1);
			
			
				
			   	str += '<div id="rss_desc"><div><span style=\"color:#F39E34;font-size:12px;font-weight:bold;\">'+json[i].title.t+'</span><HR>';
				
				
					str +='<iframe width="95%" height="240" src='+str1+' frameborder="0" allowfullscreen=""></iframe>';
					str +='<br/>'+json[i].content.t;
					
				 
				  str += '</div></div>';
				
				
			}
		}

		
        document.getElementById("contensocial").innerHTML=str;
		break;
		case 'socialwall_facebook':
		for (var i = 0; i < json.data.length; i++)
            {

                if (json.data[i].link != '')
                {
                    var fbid=json.data[i].id;
                    
                    
                    
                    var first_part=fbid.substr(0,fbid.indexOf('_'));
                     
                     var sec_part=fbid.substr(fbid.indexOf('_')+1,fbid.length);
                    
                    
                    var linkfbpost='https://www.facebook.com/'+first_part+'/posts/'+sec_part;
                   
                    
                    
				
				var msg=json.data[i].message;
				if(msg=='' || msg=='undefined' || msg==null || msg=='null')
					{
						msg='';
					}
		
				var lk='';
				if(json.data[i].likes)
				{
					lk= json.data[i].likes.data.length;
				}
				else
				{
					lk= '0';
				}
				

				str+='<div class="ui-grid-solo">';
				str+='<div class="ui-block">';
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				//str+='<div class="f_hdr_img"><img src="images/social/profile.jpg" id="f_profile" alt="profile"></div>';
				//<!--<div class="f_hdr_time" id="f_hdr_time">'+jQuery.timeago(json.data[i].updated_time)+'</div>-->
				//str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+json.data[i].from.name+'</span><br/><span class="f_hdr_desc" id="f_hdr_desc">'+json.data[i].from.category+'</span></div>';
				if(typeof json.data[i].picture !== "undefined" && json.data[i].picture != null)
					{
					str+='<div class="f_feed_bdy"><img src='+json.data[i].picture+' id="f_banner" alt="banner"></div>';
					}
				str+='<div class="f_feed_bdy"><p id="fb_msg">'+msg+'</p></div>';
				str+='<div class=f_feed_ftr><hr class=hori /><div class=f_bdy_lcs><span><img src=img/like.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Like</span><span><img src=img/comment.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Comment</span><span><img src=img/share.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Share</span></div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';
				str+='</div>';
				str+='</div>';

                }
            }

			document.getElementById("FACEBOOK").innerHTML = str;
            
            break;

		case 'socialwall_twitter':
		for (var i = 0; i < json.length; i++)
            {

               


					str+='<ul class="facebookFeed">';
					str+='<li>';
					str+='<div class="y_feedCon">';
					str+='<div class="ui-grid-a">';
					str+='<div class="ui-block-a" style="width:25%;"><img src="img/twitter.png" alt="twitter" class="y_video"></div>';
					str+='<div class="ui-block-b" style="width:75%;padding-left:10px;">';
					str+='<div class="y_hdr_title">'+json[i].user.name+'</div>';
					//str+='<div class="y_hdr_desc">'+json[i].user.description+'</div>';
					try{
					str+='<div class="f_feed_bdy"><img src='+json[i].entities.media[0].media_url+' id="f_banner" alt="banner" onClick=javascript:openBrowser(\''+json[i].entities.urls.url+'\');></div>';
					}
					catch(err){}
					str+='<div class="y_hdr_desc">'+json[i].text+'</div>';
					//str+='<div class=f_bdy_likes>'+json[i].user.followers_count+' Followers</div>';
					str+='</div></div></div></li></ul>';

                
            }

            document.getElementById("TWITTER").innerHTML = str;

            break;

		case 'socialwall_pinterest':
		console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
				console.log(json[i].name);
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+brandname+'</span><br/><span class="f_hdr_desc" id="f_hdr_desc">'+json[i].board.name+'<br>'+json[i].desc+'</span></div>';
				str +='<div class="ui-grid-solo"><div class="ui-block"><img src="'+json[i].src+'" ></div></div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';
		}
        
        
        document.getElementById("PINTEREST").innerHTML=str;
		break;
		case 'socialwall_tumblr':
		console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
        
         if(json[i].link!='')
			{
		
				str += '<div id="rss_desc"><div><img src="img/ddsmall.jpg"><div style=\"margin: -50px 5px 20px 60px;\"><span style=\"color:#F39E34;font-size:12px;font-weight:bold;\">'+json[i].title+'</span><br/><span style="font-size:11px;color:#999999;"></span></div><HR><div style=\"margin: 10px 10px 10px -20px;\" class="content-responsive">'+json[i].description+'</div><HR><a href=\"javascript:playvideo(\''+json[i].link+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><div class=\"see-all\">See All</div></a></div></div>';
				
		
			}
		}
        
        document.getElementById("contensocial").innerHTML=str;
		break;

		case 'socialwall_instagram':

		var json = JSON.parse(json)
		var length = JSON.stringify(json.images.length);

		//console.log('instagram: '+JSON.stringify(json));

		for (var i = 0; i < length; i++)
        {
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				//str+='<div class="f_hdr_img"><img src="images/social/profile.jpg" id="f_profile" alt="profile"></div>';
				str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+json.full_name+'</span><br/>';
				//str+='<span class="f_hdr_desc" id="f_hdr_desc">'+json.images[i].node.edge_media_to_caption.edges[0].node.text+'</span></div>';
				str +='<img style="border: 1px solid #cccccc;text-align: center;width: 98%;height: auto;" src="'+json.images[i].node.display_url+'" />';
				str+='<div class=f_bdy_likes>'+json.images[i].node.edge_liked_by.count+' Likes</div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';

		}

        document.getElementById("INSTAGRAM").innerHTML = str;

        break;
		
		case 'popuppage4':

       
		for(var i=0;i<json.data.length;i++)
		
		{

		str += '<ul data-role="listview" data-inset="true" class="listPpup ui-listview ui-listview-inset ui-corner-all ui-shadow" data-icon="false">';
		str += '<li class="ui-li-has-thumb ui-first-child ui-last-child"><a href="#" class="ui-btn"><img src="img/rstar.jpg"/>';
		str += '<h2>'+json.data[i].offername+'</h2><p>Coupon Code : '+json.data[i].couponcode+'</p></a>';
		str += '</li></ul>';
               
		
		}
		 $("#" + pageID + " .ui-content").html(str);
		break;
		


	}
}

function gotopoints()
	{
		$("#message").css('display', 'none');
		$("#membership2").css('display', 'none');
		$("#rewards").css('display', 'none');
		$("#points").css('display', 'block');

		//$('a[href="#monthly"]').trigger("click");	
		//$("#sidebar").panel("close")
		$.mobile.changePage( "#my_membership", { transition: "none"} );
		showTabContent('loyaltynew', 'points_history_json.asp');
		//$("#contest_tabs").tabs( "option", "active", 2 );

	
		document.getElementById("tab1").classList.remove("is-active");
		document.getElementById("tab2").classList.remove("is-active");
		document.getElementById("tab3").classList.add("is-active");
		//document.getElementById("tab4").classList.remove("is-active");
	}
	function gotorewards()
	{

		$("#message").css('display', 'none');
		$("#membership2").css('display', 'none');
		$("#rewards").css('display', 'block');
		$("#points").css('display', 'none');

		//$('a[href="#monthly"]').trigger("click");	
		//$("#sidebar").panel("close")
		$.mobile.changePage( "#my_membership", { transition: "none"} );
		showTabContent('coupons', 'cpns_history_json.asp');
		//$("#contest_tabs").tabs( "option", "active", 3 );

		document.getElementById("tab1").classList.remove("is-active");
		document.getElementById("tab2").classList.remove("is-active");
		document.getElementById("tab3").classList.remove("is-active");
		document.getElementById("tab4").classList.add("is-active");
	}
	function showRewards_latest()
	{
		/*var url_new = 'https://idemitsu.mloyalretail.com/rewardstore/default.asp?uid='+user.uid_idemitsu;
		var ref_new = cordova.InAppBrowser.open(url_new, '_blank', 'location=yes');
	
		ref_new.addEventListener('exit', function (event) {
				 
				$('#username_new').val(localStorage.getItem("usernameidemitsu"));
				var pass = localStorage.getItem("passwordidemitsu");
	
				if(pass.length>=4)
				{
							var i=4;
							while(i>0)
							{
								$('#codeBox'+i).val(parseInt(pass%10));
								i--;
								pass = parseInt(pass/10);
													
							}
			   }
	
				setTimeout( function() {
					  authenticate_new();
				}, 1000);  //1 seconds
		});*/
	
		//toast('coming soon..');
		//$.mobile.changePage( "#rewards_pg", { transition: "none"} );
		$.mobile.changePage( "#transactions", { transition: "none"} );
	}

function showScan_new_check_main()
{
	$.mobile.changePage( "#scanPage_options", { transition: "none"} );
	fetchcurrent_Location_scan();
}
	
function showScan_new_check()
{          

	     //$.mobile.changePage( "#scanpage", {transition: "none"} );
		 //earn_Scanpage('1');

	     cordova.plugins.barcodeScanner.scan(
			   function (result) {

					//$.mobile.changePage( "#homepage", {transition: "none"} );

					if(result.cancelled == true)
				    {
						//toast('Scanning canceled');
						$.mobile.changePage( "#homepage", {transition: "none"} );
				    }
					else
				    {
						var bcode = result.text;
						var bcode1 = bcode.trim();

						//var bcodenew = bcode1.substr(bcode1.indexOf('uid=')+4,bcode1.length);
						//var bcodenew = bcode1.split('-');
						//earn_Scanpage(bcodenew[4],bcodenew[3],bcodenew[0]);
						//earn_Scanpage(bcode1);
						submit_scanResult(bcode1);
                       
					}

			  },
			  function (error) {
				  alert("Scanning failed: " + error);
			  },
			  {
				  preferFrontCamera : false, // iOS and Android
				  showFlipCameraButton : true, // iOS and Android
				  showTorchButton : true, // iOS and Android
				  torchOn: false, // Android, launch with the torch switched on (if available)
				  saveHistory: true, // Android, save scan history (default false)
				  prompt : "Place the code inside the scan area", // Android
				  resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
				  formats : "QR_CODE,PDF_417,CODABAR,DATA_MATRIX,RSS14,CODE_39,CODE_93,CODE_128", // default: all but PDF_417 and RSS_EXPANDED
				  orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
				  disableAnimations : true, // iOS
				  disableSuccessBeep: false // iOS and Android
			  }
		   );
}


function submit_scanResult_frompage()
{
	var cpncode = $('#scanpage_code').val();

	if(cpncode.trim()=='')
	{
		toast('Please enter QR Code Number');
	}
	else
	{
		submit_scanResult(cpncode);
	}
}

function earn_Scanpage(bill_amount)
{
      //document.getElementById("scan_qr_success_txt").innerHTML ='';

	  var refbillno = 'idemitsu_'+Math.floor((Math.random() * 1000000000) + 1);

	  $.ajax({
			url: SERVER2+"earn_points_json_api.asp",
		    type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		    data:{
			  "mobileno": user.mobile,
			  "bill_number": refbillno,
			  "bill_amount": bill_amount,
			  "period": 'normal',
			  "scode": user.store_code_idemitsu
            },
		    beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
				xhr.setRequestHeader('apiuid', 'MLOYALAPI');
				xhr.setRequestHeader('apipswd', 'Ml0yalAP!2o14');
            },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			success: function(data, textStatus, xhr) {
			 
			    console.log("data:"+JSON.stringify(data));

			    if(data.error.length>=1)
				{
					toast_p(data.error);
				}
				else
				{
					toast_p(data.data);
					//$.mobile.changePage( "#homepage", { transition: "none"} );

					/*document.getElementById("filter_panel_div").innerHTML= data.data;
					$.mobile.changePage( "#homepage", { transition: "none"} );
					$(".overlay").fadeIn("fast");
					$("#filter_panel").slideToggle("fast");*/

					$('#username_new').val(localStorage.getItem("usernameidemitsu"));
					var pass = localStorage.getItem("passwordidemitsu");
		
					if(pass.length>=4)
					{
								var i=4;
								while(i>0)
								{
									$('#codeBox'+i).val(parseInt(pass%10));
									i--;
									pass = parseInt(pass/10);
														
								}
				   }
		
					setTimeout( function() {
						  authenticate_new();
					}, 1000);  //1 seconds
			   
				}
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+textStatus);
			}
		});
}

function logoutApp()
{
	localStorage.removeItem("usernameidemitsu");
	localStorage.removeItem("passwordidemitsu");

	localStorage.removeItem("profiledone_idemitsu");
	localStorage.removeItem("categorySelected");

	localStorage.removeItem("usernamemloyal_idemitsu");
	localStorage.removeItem("userpassloyal_idemitsu");

    user.mobile='';

	localStorage.clear();

	$.mobile.changePage("#login_pg");
}

function updateProfile()
{
		var firstname = $('#firstname_update').val();
		var lastname = $('#lastname_update').val();
		var address_update = $('#Address_update').val();
		var emailUpdate = $('email_update').val();
		var mobile = user.mobile;
		// var email = $('#update_email').val();
		// var vehicleno = $('#update_vehicleno').val().toUpperCase();
        
		
		// var mm ='';
		// var dd ='';
		// var dd1 ='';
		// var yyyy = '';
		// var yyyy1 = '';

		var birthday = $('#dob_update').val();

		if(birthday!='')
		{
			var dob = birthday.split('-');
			mm = dob.length == 3 ? dob[1] : '';
			dd = dob.length == 3 ? dob[0] : '';
			dd1 = dob.length == 3 ? dob[0] : '';

			yyyy = dob.length == 3 ? dob[2] : '';
			yyyy1 = dob.length == 3 ? dob[2] : '';

           //$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
		
		}
		// if(dd.length==4)
		// {
		// 	yyyy=dd1;
		// 	dd=yyyy1;
		// }
		
    if(firstname.trim()=='')
	{
		toast('Please enter mandatory fields.');
	}
	else
	{
    
	 $.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				'FirstName': firstname,
				'LastName': lastname,
				'deviceid': reg_id,
				'cname':'',
				'mobileno': mobile,
				'Emailid': emailUpdate,
				'dd': '',
				'mm': '',
				'yy': '',
                'deviceType': '',
				'doaday': '',
				'doamonth': '',
				'doayear': '',
				'FlatNo': '',
				'PostalCode': '',
				'City': '',
				'vehicleno': ''
				
			},
			success: function(data, textStatus, xhr) {

				
				localStorage.setItem("profiledone_idemitsu","Yes");
				
				if (data.indexOf("Success")>=0)
				{
						toast('Your profile has been updated successfully.');
						user.firstname=firstname;
						user.lastname=lastname;
						// user.emailid=email;

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
					

				
				if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
				{
					document.getElementById("profilenm").innerHTML= 'Guest';
					document.getElementById("profilenm1").innerHTML='Guest';
				}
				else
				{
					var fn='';
					var ln='';
					if(user.firstname != '')
					{
						fn = user.firstname.substring(0, 1);
					}
					if(user.lastname != '')
					{
						ln = user.lastname.substring(0, 1);
					}
					if(user.id != '')
					{
						var id1 = user.id.substring(0, 4);
						var id2 = user.id.substring(4, 8);
						var id3 = user.id.substring(8, 10);
					}

					document.getElementById("sortname").innerHTML= fn+''+ln;
					document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts").innerHTML=user.balance;
					document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts1").innerHTML=user.balance;
					//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
					document.getElementById("pr_valid").innerHTML=user.validity;

					//document.getElementById("firm_nm").innerHTML= user.proprietorname;
					//document.getElementById("sap_code").innerHTML= user.sapcode;
						
				}
					
				$.mobile.changePage( "#homepage", {transition: "flip"} );
		         
				
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
  }
		
}

function submitFeedback()
{

 var service=$('input[name="service"]:checked').val();
 var product=$('input[name="product"]:checked').val();
 var offers=$('input[name="offers"]:checked').val();
 var store_atmosphere=$('input[name="store_atmosphere"]:checked').val();

 var comments = $('#feedback_enq').val();


 /*if(service==''){
		  toast('Please enter mandatory fields!');
		}
 else{*/

   $.ajax({
    url: SERVER+'feedback_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'html',
    data: {

				'MobileNo': user.mobile,
				'FirstName': '',
				'LastName': '',
				'EmailId': '',       
				'StoreId': '',    
				'Var1': service,   
				'Var2': product,     
				'Var3': offers,
				'Var4': store_atmosphere,    
				'Var5': '',      
				'Var6': '',     
				'Var7': '',        
				'Var8': '',             
				'Var9': '',
				'Var10': '',
				'Var11': '',           
				'Var12': '',
				'Var13': comments,
				'Var14': '',
				'Var15': '',
				'Var16': '',
				'Var17': '',
				'Var18': '',
				'Var19': '',
				'Var20': ''	
					
			},
   
    success: function(data, textStatus, xhr) {

				console.log('JSONDATA:'+JSON.stringify(data));

				toast('Thanks for submitting your valuable feedback.');

				$.mobile.changePage( "#homepage", { transition: "none"} );

				$('input[name="service"]').attr('checked', false);
				$('input[name="service"]').prop('checked',false);
				$('input[name="product"]').attr('checked', false);
				$('input[name="product"]').prop('checked',false);
				$('input[name="offers"]').attr('checked', false);
				$('input[name="offers"]').prop('checked',false);
				$('input[name="store_atmosphere"]').attr('checked', false);
				$('input[name="store_atmosphere"]').prop('checked',false);
				$('#feedback_enq').val('');
    },
    error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 //}

}

function showTrainingVideos()
{
	 /*document.getElementById("training_vdos_div").innerHTML= '';
	 
	 var tabserver = SERVER+"specials_json.asp";
	 
	 $.getJSON(
            tabserver , {  }, 
		     function (json) {
			   //console.log("SSSSS:" + JSON.stringify(json));
				var str='';
                 
				for(var i=0;i<json.length;i++)
				{
					if(json[i].AdName=='TrainingVideo')
					{
						str+= '<div class="event_block" style="margin-bottom: 25px;">';
						str+= '<div class="event_fig">';
					    str+= '<iframe width="100%" height="200" src='+json[i].AdDesc+' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
						//str+= '<iframe width="100%" height="200" src=https://www.youtube.com/embed/FqRQGaCVrsM&t=3s title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen><img src="assets/images/app_images/update-banner.png" alt=""></iframe>';
				        str+= '</div>';
						str+= '</div>';
					}
		        }

				document.getElementById("training_vdos_div").innerHTML= str;

				$.mobile.changePage( "#training", { transition: "none"} );

    }).error(function () {
        
            toast("Error: Could not connect to Server, make sure you are connected to Network");
       
    });*/

	$.mobile.changePage( "#training", { transition: "none"} );
	 
}

function showTnc_popup()
{
	$('#tnc_popup').popup();
    $('#tnc_popup').popup("open");
}

function close_Popup()
{
	$('#tnc_popup').popup("close");
}

function receivedEvent(id) {
       

 var push = PushNotification.init({ "android": {"senderID": "297205445060"}});
                     push.on('registration', function(data) {
                     
					 reg_id=data.registrationId;
                     });
          
                     push.on('notification', function(data) {
						alert(data.message);
					 
						//showInbox();
                     });
          
                     push.on('error', function(e) {
						//alert(e);
                     }
					);
 }

function capturePhoto_profile()
{
	  //navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
	  $("#optionspop_profile").popup();
	  $("#optionspop_profile").popup("open");
}

function capturePhoto4() 
{
	try{
		$("#optionspop_profile").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
}

function capturePhoto4_gallery()
{
	try{
		$("#optionspop_profile").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,targetWidth:512,targetWidth:512,correctOrientation:true
				});
}

function onFail(message)
{
	toast('Failed because: ' + message);
}

function uploadPhoto4(imageURI) 
{

				
				/*var b_Image = document.getElementById('update_photo');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;*/

				var b_Image = document.getElementById('update_photo1');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				//var fName='photo_'+Math.floor((Math.random() * 1000000) + 1);
				var fName='idemitsu_'+user.mobile;

				
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//file_pphoto = options.fileName+".jpg";

				file_pphoto="https://taghash.co/idemitsu/uploads/"+options.fileName+".jpg";

				localStorage.setItem('file_pphoto',file_pphoto);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				/*statusDom=document.getElementById("update_photo_status");
				statusDomdiv=document.getElementById("update_photo_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};*/

				ft.upload(imageURI, encodeURI("https://taghash.co/idemitsu/upload_photo_new1.php"), win, failPhoto4, options, true);
}

function failPhoto4(error) 
{
				toast('Photo upload failed. Please try after sometime: ' + error.code);
				localStorage.removeItem('file_pphoto');
				file_pphoto = '';
				document.getElementById('update_photo1').src = "assets/images/user_pic.png";
				//document.getElementById('update_photo_self').src = "";
}

function showUpdatesbanners_vdo()
{
	//  document.getElementById("homepagebanners_update").innerHTML= '';
	 
	 var tabserver = SERVER+"specials_json.asp";
	 
	 $.getJSON(
            tabserver , {  }, 
		     function (json) {
			   //console.log("SSSSS:" + JSON.stringify(json));

				var str='';
				str+='<div class="primary_block mb-20 border_none promo_slider owl-carousel owl-theme p-0">';
                 
				for(var i=0;i<json.length;i++)
				{
					if(json[i].AdName=='Updates')
					{
						str+='<div class="event_fig">';
						str+='<iframe width="100%" height="200" src='+json[i].AdDesc+' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
						str+='</div>';
					}
		        }
                
				str+='</div>';

				// document.getElementById("homepagebanners_update").innerHTML= str;

				$(".promo_slider").owlCarousel({
					items:1,
					loop:false,
					margin:0,
					autoplay:true,
					nav:false,
					dots:true,
					autoplayTimeout:1800
				});

				//$.mobile.changePage( "#homepage", { transition: "none"} );

    }).error(function () {
        
            //toast("Error: Could not connect to Server, make sure you are connected to Network");
       
    });
	 
}

$(document).on("pageshow", "#homepage", function(){
	
	showUpdatesbanners_vdo();
	//setUserbalance_aboutus();

});

$(document).on("pageshow", "#notifications", function(){
	
	showTabContent('inbox_not', 'msg_history_json.asp');

});

$(document).on("pageshow", "#notifications_dealer", function(){
	
	showNotification_dealer();

});

function showNotification_dealer()
{

 //document.getElementById("ncount_home").innerHTML = '';

 $.ajax({

	url: SERVER+'msg_history_json.asp',
	type: 'GET',
	timeout: 50000,
	dataType: 'json',
	data: {'mno': store.storemobile },
	complete: function(xhr, textStatus) {
	},
	success: function(data, textStatus, xhr) {

		if(data.length>0)
		{
			var listItems= "";

			//var setime = (data[0].msgdate+data[0].msgtime);
			//localStorage.setItem("nottimeseen",setime);
			//localStorage.setItem("notseen_count",data.length);

			for(var i = 0; i < data.length; i++)
			{

				str +='<div class="notifi-date" id="notifi_date">'+data[i].msgdate+'</div>';
				str +='<div class="notifi-content">';
				str +='<h3 id="notifi_heading">IDEMITSU</h3>';
				str +='<p id="notifi_content">'+data[i].msg+'</p>';
				str +='<br><span class="notifi-old">'+data[i].msgtime+'</span>';
				str +='</div>';
			}

			document.getElementById("notification_message_dealer").innerHTML = listItems;

			//$.mobile.changePage( "#notificationspg", {transition: "slide"} );
		}
		else
		{     
			  //localStorage.setItem("notseen_count","0");
			  document.getElementById("notification_message_dealer").innerHTML = 'No Notification Available!!';
		}


	},
	error: function(xhr, textStatus, errorThrown) {

	}
	});

}

function loadProducts()
{
	
	var url_new = 'https://www.idemitsu.com/';
	var ref_new = cordova.InAppBrowser.open(url_new, '_blank', 'location=yes');

}

function purchaseHistory()
{
	var pop = document.getElementById('purchaseHistory');

	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('redeemHistory');
		var pop2 = document.getElementById('bonusHistory');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

function redeemHistory()
{
	var pop = document.getElementById('redeemHistory');
	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('purchaseHistory');
		var pop2 = document.getElementById('bonusHistory');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

function bonusHistory()
{
	var pop = document.getElementById('bonusHistory');
	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('purchaseHistory');
		var pop2 = document.getElementById('redeemHistory');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

function showwhats_New()
{
	 document.getElementById("whatsnew_div").innerHTML= '';
	 
	 var tabserver = SERVER+"specials_json.asp";
	 
	 $.getJSON(
            tabserver , {  }, 
		     function (json) {
			   //console.log("SSSSS:" + JSON.stringify(json));

				var str='';
                 
				for(var i=0;i<json.length;i++)
				{
					if(json[i].AdName=='Updates')
					{
						str+= '<div class="event_block" style="margin-bottom: 25px;">';
						str+= '<div class="event_fig">';
					    str+= '<iframe width="100%" height="200" src='+json[i].AdDesc+' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
				        str+= '</div>';
						str+= '</div>';
					}
		        }

				document.getElementById("whatsnew_div").innerHTML= str;

				$.mobile.changePage( "#whatsnew", { transition: "none"} );

    }).error(function () {
        
            toast("Error: Could not connect to Server, make sure you are connected to Network");
       
    });
	 
}

$(document).on('pageshow', '#transactions', function (event, ui) {
    get_transactions_details();
	setUserbalance_aboutus();


	        $('input[type=radio][name=filter_transaction]').change(function() {

					$("#dateduration-emp").hide();
					get_transactions_details_datewise(this.value);
					$("#filter_panel1").toggle();
					$(".overlay").fadeOut("fast");
			});

});

function get_transactions_details()
{
	
	  $.ajax({
		url: SERVER2+'get_transactions_details_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		console.log(JSON.stringify(data));

			var str='';
			var str2='';

			if(data.data[0].msg=='No Records Found.')
			{
				//toast('No Records Found.');
				document.getElementById('txns_pg_div1').innerHTML= '<div class="recent_transfer_header pl-4 pr-4">Earned History</div><span class="no_tx_rcrds">No Records Found.</span>';
				$("#tx_download_btn").css("display","none");
			}
			else
			{    
				 str += '<div class="recent_transfer_header pl-4 pr-4">Earned History</div>';
				 str += '<div class="out_wrapper2">';
				 str += '<div class="recent_transfer">';
				 for (var i = 0; i < data.data.length; i++)
				 {	
					
					    //str += '<div class="recent_transfer_header pl-4 pr-4">'+data.data[i].BillDate+'</div>';
						if(data.data[i].TransType == 'Revoke')
					    {
							str += '<div class="recent_block pl-4 pr-4">';
							str += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Revoked from Idemitsu</p>';
							str += '<p class="recent_date">'+data.data[i].BillDate+'</p>';
							str += '<p class="recent_date">'+data.data[i].BillNumber+'</p>';
						    str += '</div>';
						    str += '<div class="recent_user_points"><h2 class="text_green">-'+data.data[i].Points+'<span>Points</span></h2></div>';						
					        str += '</div>';
						}
						else if(data.data[i].TransType == 'Redeem')
						{
							str += '<div class="recent_block pl-4 pr-4">';
							str += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Redeemed from Idemitsu</p>';
							str += '<p class="recent_date">'+data.data[i].BillDate+'</p>';
							str += '<p class="recent_date">'+data.data[i].BillNumber+'</p>';
						    str += '</div>';
						    str += '<div class="recent_user_points"><h2 class="text_green">-'+data.data[i].Points+'<span>Points</span></h2></div>';						
					        str += '</div>';
						}
						else
						{
							str += '<div class="recent_block pl-4 pr-4">';
							str += '<div class="recent_user_icon1"> <img src="assets/images/pointredeem.png" class="img-responsive" alt=""> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Received from Idemitsu</p>';
							str += '<p class="recent_date">'+data.data[i].BillDate+'</p>';
							str += '<p class="recent_date">'+data.data[i].BillNumber+'</p>';
						    str += '</div>';
						    str += '<div class="recent_user_points"><h2 class="text_green">+'+data.data[i].Points+'<span>Points</span></h2></div>';						
					        str += '</div>';
					    }
							
				 }

				 str += '</div>';
				 str += '</div>';

				 document.getElementById('txns_pg_div1').innerHTML=str;
				 $("#tx_download_btn").css("display","block");

			}


			if(data.data1[0].msg=='No Records Found.')
			{
				//toast('No Records Found.');
				document.getElementById('txns_pg_div2').innerHTML= '<div class="recent_transfer_header pl-4 pr-4">Redeem History</div><span class="no_tx_rcrds">No Records Found.</span>';
			}
			else
			{
				 str2 += '<div class="recent_transfer_header pl-4 pr-4">Redeem History</div>';
				 str2 += '<div class="out_wrapper2">';
				 str2 += '<div class="recent_transfer">';
				 for (var i = 0; i < data.data1.length; i++)
				 {	
					
					    //str += '<div class="recent_transfer_header pl-4 pr-4">'+data.data[i].BillDate+'</div>';
						if(data.data1[i].TransType == 'Revoke')
					    {
							str2 += '<div class="recent_block pl-4 pr-4">';
							str2 += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str2 += '<div class="recent_user_details">';						
							str2 += '<p class="recent_detail_text">Points Revoked from Idemitsu</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RedeemDate+'</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RefBillNumber+'</p>';
						    str2 += '</div>';
						    str2 += '<div class="recent_user_points"><h2 class="text_red">-'+data.data1[i].Points+'<span>Points</span></h2></div>';						
					        str2 += '</div>';
						}
						else if(data.data1[i].TransType == 'Redeem')
						{
							str2 += '<div class="recent_block pl-4 pr-4">';
							str2 += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str2 += '<div class="recent_user_details">';						
							str2 += '<p class="recent_detail_text">Points Redeemed from Idemitsu</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RedeemDate+'</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RefBillNumber+'</p>';
						    str2 += '</div>';
						    str2 += '<div class="recent_user_points"><h2 class="text_red">-'+data.data1[i].Points+'<span>Points</span></h2></div>';						
					        str2 += '</div>';
						}
						else
						{
							str2 += '<div class="recent_block pl-4 pr-4">';
							str2 += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str2 += '<div class="recent_user_details">';						
							str2 += '<p class="recent_detail_text">Points Redeemed from Idemitsu</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RedeemDate+'</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RefBillNumber+'</p>';
						    str2 += '</div>';
						    str2 += '<div class="recent_user_points"><h2 class="text_red">-'+data.data1[i].Points+'<span>Points</span></h2></div>';						
					        str2 += '</div>';
					    }
							
				 }

				 str2 += '</div>';
				 str2 += '</div>';

				 document.getElementById('txns_pg_div2').innerHTML=str2;

			}

			//$.mobile.changePage("#txns_pg");
		},
		error: function(xhr, textStatus, errorThrown) {

		}
	  });
}

function get_transactions_details_datewise(transact)
{

	//$("#filter_panel1").slideToggle();

	document.getElementById('txns_pg_div1').innerHTML='';
	document.getElementById('txns_pg_div2').innerHTML='';

    //var duration1 = $('input[type=radio][name=filter_transaction]').val();
	var duration=$("#filter_transaction_div :radio:checked").val();
	console.log('duration:'+duration);
	var fromdt ='';
	var enddt = '';
	
	if(duration == 'last1month')
    {
    	var today = new Date();
    	var d = new Date();
    	d.setMonth(d.getMonth() - 1);
    	enddt = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    	fromdt = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    }
    else if(duration == 'last3months')
    {
    	var today = new Date();
    	var d = new Date();
    	d.setMonth(d.getMonth() - 3);
    	enddt = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    	fromdt = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    }
    else if(duration == 'last6months')
    {
    	var today = new Date();
    	var d = new Date();
    	d.setMonth(d.getMonth() - 6);
    	enddt = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    	fromdt = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    }
    else if(duration == 'last1year')
    {
    	var today = new Date();
    	var d = new Date();
    	d.setMonth(d.getMonth() - 12);
    	enddt = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    	fromdt = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    }

	console.log('fromdt:'+fromdt);
	console.log('enddt:'+enddt);
	
	  $.ajax({
		url: SERVER2+'get_transactions_details_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile,'sdate': fromdt,'edate': enddt },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		console.log(JSON.stringify(data));

			var str='';
			var str2='';

			if(data.data[0].msg=='No Records Found.')
			{
				//toast('No Records Found.');
				document.getElementById('txns_pg_div1').innerHTML= '<div class="recent_transfer_header pl-4 pr-4">Earned History</div><span class="no_tx_rcrds">No Records Found.</span>';
			}
			else
			{    
				 str += '<div class="recent_transfer_header pl-4 pr-4">Earned History</div>';
				 str += '<div class="out_wrapper2">';
				 str += '<div class="recent_transfer">';
				 for (var i = 0; i < data.data.length; i++)
				 {	
					
					    //str += '<div class="recent_transfer_header pl-4 pr-4">'+data.data[i].BillDate+'</div>';
						if(data.data[i].TransType == 'Revoke')
					    {
							str += '<div class="recent_block pl-4 pr-4">';
							str += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Revoked from Idemitsu</p>';
							str += '<p class="recent_date">'+data.data[i].BillDate+'</p>';
							str += '<p class="recent_date">'+data.data[i].BillNumber+'</p>';
						    str += '</div>';
						    str += '<div class="recent_user_points"><h2 class="text_green">-'+data.data[i].Points+'<span>Points</span></h2></div>';						
					        str += '</div>';
						}
						else if(data.data[i].TransType == 'Redeem')
						{
							str += '<div class="recent_block pl-4 pr-4">';
							str += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Redeemed from Idemitsu</p>';
							str += '<p class="recent_date">'+data.data[i].BillDate+'</p>';
							str += '<p class="recent_date">'+data.data[i].BillNumber+'</p>';
						    str += '</div>';
						    str += '<div class="recent_user_points"><h2 class="text_green">-'+data.data[i].Points+'<span>Points</span></h2></div>';						
					        str += '</div>';
						}
						else
						{
							str += '<div class="recent_block pl-4 pr-4">';
							str += '<div class="recent_user_icon1"> <img src="assets/images/pointredeem.png" class="img-responsive" alt=""> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Received from Idemitsu</p>';
							str += '<p class="recent_date">'+data.data[i].BillDate+'</p>';
							str += '<p class="recent_date">'+data.data[i].BillNumber+'</p>';
						    str += '</div>';
						    str += '<div class="recent_user_points"><h2 class="text_green">+'+data.data[i].Points+'<span>Points</span></h2></div>';						
					        str += '</div>';
					    }
							
				 }

				 str += '</div>';
				 str += '</div>';

				 document.getElementById('txns_pg_div1').innerHTML=str;

			}


			if(data.data1[0].msg=='No Records Found.')
			{
				//toast('No Records Found.');
				document.getElementById('txns_pg_div2').innerHTML= '<div class="recent_transfer_header pl-4 pr-4">Redeem History</div><span class="no_tx_rcrds">No Records Found.</span>';
			}
			else
			{
				 str2 += '<div class="recent_transfer_header pl-4 pr-4">Redeem History</div>';
				 str2 += '<div class="out_wrapper2">';
				 str2 += '<div class="recent_transfer">';
				 for (var i = 0; i < data.data1.length; i++)
				 {	
					
					    //str += '<div class="recent_transfer_header pl-4 pr-4">'+data.data[i].BillDate+'</div>';
						if(data.data1[i].TransType == 'Revoke')
					    {
							str2 += '<div class="recent_block pl-4 pr-4">';
							str2 += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str2 += '<div class="recent_user_details">';						
							str2 += '<p class="recent_detail_text">Points Revoked from Idemitsu</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RedeemDate+'</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RefBillNumber+'</p>';
						    str2 += '</div>';
						    str2 += '<div class="recent_user_points"><h2 class="text_red">-'+data.data1[i].Points+'<span>Points</span></h2></div>';						
					        str2 += '</div>';
						}
						else if(data.data1[i].TransType == 'Redeem')
						{
							str2 += '<div class="recent_block pl-4 pr-4">';
							str2 += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str2 += '<div class="recent_user_details">';						
							str2 += '<p class="recent_detail_text">Points Redeemed from Idemitsu</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RedeemDate+'</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RefBillNumber+'</p>';
						    str2 += '</div>';
						    str2 += '<div class="recent_user_points"><h2 class="text_red">-'+data.data1[i].Points+'<span>Points</span></h2></div>';						
					        str2 += '</div>';
						}
						else
						{
							str2 += '<div class="recent_block pl-4 pr-4">';
							str2 += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str2 += '<div class="recent_user_details">';						
							str2 += '<p class="recent_detail_text">Points Redeemed from Idemitsu</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RedeemDate+'</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RefBillNumber+'</p>';
						    str2 += '</div>';
						    str2 += '<div class="recent_user_points"><h2 class="text_red">-'+data.data1[i].Points+'<span>Points</span></h2></div>';						
					        str2 += '</div>';
					    }
							
				 }

				 str2 += '</div>';
				 str2 += '</div>';

				 document.getElementById('txns_pg_div2').innerHTML=str2;

			}

			//$.mobile.changePage("#txns_pg");
		},
		error: function(xhr, textStatus, errorThrown) {

		}
	  });
}

$(document).on('pageshow', '#pointPage', function (event, ui) {
    
	update_balancePts();
 
});

function update_balancePts()
{
	  $.ajax({
			url: SERVER2+'get_points_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'mobileno': user.mobile
				},
			success: function(data, textStatus, xhr) {
				
				//console.log('Data:'+JSON.stringify(data));

				if(data.data!='')
				{
					 console.log('BalancePoints:'+data.data[0].BalancePoints);
					 user.balance = data.data[0].BalancePoints;
					 localStorage.setItem('balance',user.balance);

					 document.getElementById("profilepts").innerHTML= data.data[0].BalancePoints;
					 document.getElementById("profilepts1").innerHTML= data.data[0].BalancePoints;
				}
				else
				{
					 user.balance = '0';
					 localStorage.setItem('balance',user.balance);

					 document.getElementById("profilepts").innerHTML= '0';
					 document.getElementById("profilepts1").innerHTML= '0';
				}
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				 $.mobile.changePage( "#homepage", { transition: "none"} );
				}
			 
		});
}

function submitPaytm()
{

    var userid = $('#kyc_paytm_id').val();
    var amount = $('#kyc_paytm_amount').val();

	if(userid=='')
	{
		toast("Please enter Paytm Wallet Number");
	}
	else if(userid.length!=10)
    {
		toast('Please enter valid Paytm Wallet Number');
	}
	else if(amount=='' || amount=='0' )
	{
		toast("Please enter points to redeem");
	}
    else if((parseFloat(amount)) > parseFloat(user.balance))
	{
		toast('Points redeemeed cannot be greater than point balance');
	}
	else
	{
		 burnpoints_byqr(amount,userid);
	}

}

function burnpoints_byqr(camount,userid)
{

	var refbillno = 'idemitsu'+Math.floor((Math.random() * 1000000000) + 1);

	$.ajax({
			url: SERVER2+"burn_points_json_api.asp",
			//url: "https://pentieelectricals.mloyalretail.com/APIs/burn_points_json_api.asp",
		    type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		    data:{
			  "mobileno": user.mobile,
			  "ref_bill_number": refbillno,
			  "redeem_points": camount,
			  "send": '1'
            },
		    beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
				xhr.setRequestHeader('apiuid', 'MLOYALAPI');
				xhr.setRequestHeader('apipswd', 'Ml0yalAP!2o14');

            },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			success: function(data, textStatus, xhr) {
			    
				 console.log("data:"+JSON.stringify(data));

				 if(data.data.length>=1)
				 {
					//toast(data.data);
					sendGratification(camount,userid);
				 }
				 else
				 {
					 toast(data.error);
					 $.mobile.changePage( "#homepage", { transition: "none"} );
				 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
}

function sendGratification(amount,userid)
{
	    $.ajax({
				url: "https://taghash.co/grati/idemitsu/send.php",
				type: 'POST',
				timeout: 70000,
				dataType: 'json',
				data:JSON.stringify({
					  "mobileno": userid,
					  "amount": amount
				}),
				beforeSend: function (xhr) {

					$("#wait").css("display","block");

				},
				complete: function(xhr, textStatus) {
					$("#wait").css("display","none");
				},
				success: function(data, textStatus, xhr) {
				 
				 console.log("data:"+JSON.stringify(data));

					if(data.response.status=='ACCEPTED')
					{
						//toast('Request accepted');
						toast_p('RS.('+amount+') Will be credited to your Paytm wallet after Approval.');
						//burnpoints(amount);

						//document.getElementById("filter_panel_div").innerHTML= 'RS.('+amount+') Will be credited to your Paytm wallet after Approval.';
						$.mobile.changePage( "#homepage", { transition: "none"} );
						//$(".overlay").fadeIn("fast");
						//$("#filter_panel").slideToggle("fast");
					}
					else
					{
						toast('Request failed');
						$.mobile.changePage( "#homepage", {transition: "none"} );
					}

					$.mobile.changePage( "#homepage", { transition: "none"} );
						
				 },
				error: function(xhr, textStatus, errorThrown) {
					 toast('Could not connect to Server, make sure you are connected to Internet');
					}
			});
}

function categorySelected(cattype)
{
	console.log('Seleted type: '+cattype);

	localStorage.setItem("categorySelected",cattype);
    
	if(cattype=='Workshop' || cattype=='Retailer' || cattype=='Mechanic' || cattype=='Consumer' || cattype=='Distributor')
	{
		$.mobile.changePage( "#login_pg", { transition: "none"} );
	}
	/*else if(cattype=='Distributor')
	{
		$.mobile.changePage( "#page-login-dealer", { transition: "none"} );
	}*/
	else
	{
		$.mobile.changePage( "#login_pg", { transition: "none"} );
	}

}

function categorySelected_new(cattype)
{
	    console.log('Seleted type: '+cattype);
 
	    localStorage.setItem("categorySelected",cattype);
    

	    if(cattype=='Distributor')
		{
			$.mobile.changePage( "#page-form-distributor", { transition: "flip"} );
		}
		else if(cattype=='Workshop')
		{
			$.mobile.changePage( "#page-form-workshop", { transition: "flip"} );
		}
		else if(cattype=='Retailer')
		{
			$.mobile.changePage( "#page-form-retailer", { transition: "flip"} );
		}
		else if(cattype=='Mechanic')
		{
			$.mobile.changePage( "#page-form-machanic", { transition: "flip"} );
		}
		else if(cattype=='Consumer')
		{
			$.mobile.changePage( "#page-form-consumer", { transition: "flip"} );
		}
		else
		{
			toast("Category does't selected");
			$.mobile.changePage( "#login_pg", { transition: "none"} );
		}

}

function captureShopPhoto_profile()
{
	  //navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
	  $("#shopPhotoregistration_photo").popup();
	  $("#shopPhotoregistration_photo").popup("open");
}

function captureShopPhoto4() 
{
	try{
		$("#shopPhotoregistration_photo").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadShopPhoto4, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
}

function captureShopPhoto4_gallery()
{
	try{
		$("#shopPhotoregistration_photo").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,targetWidth:512,targetWidth:512,correctOrientation:true
				});
}
function onFail(message)
{
	toast('Failed because: ' + message);
}

function uploadShopPhoto4(imageURI) 
{

				
				/*var b_Image = document.getElementById('update_photo');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;*/

				var b_Image = document.getElementById('shopPhoto_registration');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				//var fName='photo_'+Math.floor((Math.random() * 1000000) + 1);
				var fName='idemitsu_'+user.mobile;

				
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//file_pphoto = options.fileName+".jpg";

				file_pphoto="https://taghash.co/idemitsu/uploads/"+options.fileName+".jpg";

				localStorage.setItem('file_pphoto',file_pphoto);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				/*statusDom=document.getElementById("update_photo_status");
				statusDomdiv=document.getElementById("update_photo_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};*/

				ft.upload(imageURI, encodeURI("https://taghash.co/idemitsu/upload_photo_new1.php"), win, failPhoto4, options, true);
}

function failPhoto4(error) 
{
				toast('Photo upload failed. Please try after sometime: ' + error.code);
				localStorage.removeItem('file_pphoto');
				file_pphoto = '';
				document.getElementById('shopPhoto_registration').src = "assets/images/user_pic.png";
				//document.getElementById('update_photo_self').src = "";
}
// *******************************Identification Photo*******************************
function captureIdentficationPhoto_profile()
{
	  //navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
	  $("#identficationPhotoregistration_photo").popup();
	  $("#identficationPhotoregistration_photo").popup("open");
}
function captureIdentficationPhoto4() 
{
	try{
		$("#identficationPhotoregistration_photo").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
}
function captureIdentficationPhoto4_gallery()
{
	try{
		$("#identficationPhotoregistration_photo").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadIdentficationPhoto4, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,targetWidth:512,targetWidth:512,correctOrientation:true
				});
}
function onFail(message)
{
	toast('Failed because: ' + message);
}

function uploadIdentficationPhoto4(imageURI) 
{

				
				/*var b_Image = document.getElementById('update_photo');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;*/

				var b_Image = document.getElementById('shopPhoto_registration');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				//var fName='photo_'+Math.floor((Math.random() * 1000000) + 1);
				var fName='idemitsu_'+user.mobile;

				
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//file_pphoto = options.fileName+".jpg";

				file_pphoto="https://taghash.co/idemitsu/uploads/"+options.fileName+".jpg";

				localStorage.setItem('file_pphoto',file_pphoto);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				/*statusDom=document.getElementById("update_photo_status");
				statusDomdiv=document.getElementById("update_photo_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};*/

				ft.upload(imageURI, encodeURI("https://taghash.co/idemitsu/upload_photo_new1.php"), win, failPhoto4, options, true);
}

function failPhoto4(error) 
{
				toast('Photo upload failed. Please try after sometime: ' + error.code);
				localStorage.removeItem('file_pphoto');
				file_pphoto = '';
				document.getElementById('identficationPhoto_registration').src = "assets/images/user_pic.png";
				//document.getElementById('update_photo_self').src = "";
}

function authenticateWorkshop()
{

  var uname = $('#username_new').val();
  var pwd = $('#codeBox1').val()+$('#codeBox2').val()+$('#codeBox3').val()+$('#codeBox4').val();

  var phno = localStorage.getItem("phno");
    
  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number /Passcode');
 }
 else{
  $.ajax({
    url: SERVER+'mloyallogin_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'username': uname, 'password': pwd},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {

         $('#codeBox1').val('');
         $('#codeBox2').val('');
         $('#codeBox3').val('');
         $('#codeBox4').val('');
   
	console.log("success"+JSON.stringify(data));
   if(data.status=='success'){
    user.balance = data.balance;
    user.firstname = data.firstname;
    user.id = data.id;
    user.lastname = data.lastname;
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	user.trans_sms = data.trans_sms;
	user.mktgsms = data.mktgsms;
	user.cpns = data.cpns;
    user.ads = data.ads;
	user.state = checkforundefined(data.customer_state);
    user.dob = data.dob;
    user.emailid = checkforundefined(data.emailid);
	user.store_code_idemitsu = checkforundefined(data.DealerCode);
	user.def_store = checkforundefined(data.store);
	user.datatype = checkforundefined(data.IdProof_Name);
	user.city = checkforundefined(data.City);
	user.district = checkforundefined(data.Distict);
	user.floor_flat = data.floor_flat;
	user.visit_frequency = data.visit_frequency;
	user.membership_slab = checkforundefined(data.slabid);
	user.uid_idemitsu = checkforundefined(data.uid);
	//user.vehicleno = checkforundefined(data.vehicleno);

	user.gst_no = checkforundefined(data.GST_No);
	user.pan_no = checkforundefined(data.PAN_No);
	user.pincode = checkforundefined(data.Postalcode);
	user.address = checkforundefined(data.location);
	user.VehicleOptions  = checkforundefined(data.VehicleModel);
	//user.WhereBuy = checkforundefined(data.DealerCode);
	user.WhereBuy = checkforundefined(data.Where_Buy);
	user.businessCategory  = checkforundefined(data.Business_Category_Type);
	user.companyName  = checkforundefined(data.Company_Shop_Name);
	user.ownerName  = checkforundefined(data.Owner_Name);
	user.docPhoto = checkforundefined(data.kyc_doc_photo);



	if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined')
		user.cpns='0';

	console.log("user.firstname:"+user.firstname);
    
    $('#username').val('');
    $('#password_myacc').val('');
  
   localStorage.setItem('usernameidemitsu',uname);
   localStorage.setItem('passwordidemitsu',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('trans_sms',user.trans_sms);
   localStorage.setItem('mktgsms',user.mktgsms);
   localStorage.setItem('cpns',user.cpns);
   localStorage.setItem('ads',user.ads);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);
   localStorage.setItem('membership_slab',user.membership_slab);
   // localStorage.setItem('passworddd',pwd);

	
 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
 if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';
 if(user.store_code_idemitsu=='undefined' || user.store_code_idemitsu=='null' || user.store_code_idemitsu==null)
			user.store_code_idemitsu = 'HO-001';

		//$('#workshopFirstName').val(user.firstname);
		//$('#workshopLastName').val(user.lastname);
		$('#workshopEmailId').val(user.emailid);
		$('#workshopVehicleOptions').val(user.businessCategory);
		$('#workshopCompanyName').val(user.firstname);
		$('#workshopOwnerName').val(user.ownerName);
		$('#workshopGstNo').val(user.gst_no);
		$('#workshopPanNo').val(user.pan_no);
		$('#workshopPincode').val(user.pincode);
		$('#workshopLocation').val(user.address);
		//$('#workshopCity').val(user.city);
		//$('#workshopState').val(user.state);
		$('#workshopWhereBuy').val(user.WhereBuy);
    
	if(user.id != ''){
		var id1 = user.id.substring(0, 4);
		var id2 = user.id.substring(4, 8);
		var id3 = user.id.substring(8, 10);
	}
    if(user.firstname != '' || user.lastname != ''){
		var fn = user.firstname.substring(0, 1);
		var ln = user.lastname.substring(0, 1);
	}
	document.getElementById("sortname").innerHTML= fn+''+ln;
	document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
	document.getElementById("profilepts").innerHTML=user.balance;
    document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
    document.getElementById("profilepts1").innerHTML=user.balance;
	//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
	document.getElementById("pr_valid").innerHTML=user.validity;

	//document.getElementById("firm_nm").innerHTML= user.proprietorname;
	//document.getElementById("sap_code").innerHTML= user.sapcode;

	/*if(user.p_photo != '')
    {
		if(imageExists(user.p_photo))
		{
			document.getElementById("update_photo").src = user.p_photo;
			document.getElementById("update_photo_self").src = user.p_photo;
			document.getElementById("update_photo1").src = user.p_photo;
			localStorage.setItem('file_pphoto',user.p_photo);
		}
	}*/
	
	if(user.dob!='')
	{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		//$('#update_dob').val(yyyy+'-'+mm+'-'+dd);
		
	}

	var numbers = /^[0-9]+$/;
	if(user.state.trim()!='')
	{
		if(user.state.match(numbers))
		{
			$("#workshopState").val(user.state);
			fetchCitylist_1_new(user.state,'workshopPincode','workshopCity');
		}
		else
		{
			$("#workshopState option").each(function() {
						  if($(this).text().indexOf(user.state)>=0) {
							 
							$(this).prop('selected', 'selected');            
						  }                        
			});
			var sval=$("#workshopState").val();
			fetchCitylist_1(sval,'workshopPincode','workshopCity');
		 }
	}

	 if(user.docPhoto != '')
	 {
		if(imageExists(user.docPhoto))
		{
			//document.getElementById("shop_photo").src = versionurl+'uploads/'+user.panphoto;
			document.getElementById("kycdoc_photo2").src = user.docPhoto;
			localStorage.setItem('docimg',user.docPhoto);
		}
	 }

	
	var existmemtype = data.Member_Type;
	if(typeof existmemtype == undefined || existmemtype == null || existmemtype == 'null')
		existmemtype = '';
	if(existmemtype == '')
	{
		$.mobile.changePage( "#form-btn-pg", { transition: "flip"} );
	}
	else
	{
        localStorage.setItem("categorySelected",existmemtype);

		if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
		{
			//document.getElementById('update_firstname').readOnly = false;
			//document.getElementById('update_lastname').readOnly = false;

			var editPage = document.getElementById("editProfile_page");
			//var profilePage = document.getElementById("footerProfilePage");

			if(localStorage.getItem("categorySelected")=='Distributor')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-distributor"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-distributor", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Workshop')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-workshop"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-workshop", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Retailer')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-retailer"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-retailer", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Mechanic')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-machanic"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-machanic", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Consumer')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<a href="#page-form-consumer"><li><div class="fthumb-icon"><img src="assets/images/app_images/profile.png"></div>Profile</li></a>';
					$.mobile.changePage( "#page-form-consumer", { transition: "flip"} );
			}
			else
			{
					toast("Category does't selected");
			}

			// $.mobile.changePage( "#page-forgot-password", { transition: "flip"} );
		}
		else
		{
			   
			/*if(localStorage.getItem("profiledone_idemitsu"))
			{
				
				if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
				{
					document.getElementById("profilenm").innerHTML= 'Guest';
					document.getElementById("profilenm1").innerHTML='Guest';
				}
				else
				{
					document.getElementById("sortname").innerHTML= fn+''+ln;
					document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts").innerHTML=user.balance;
					document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts1").innerHTML=user.balance;
					//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
					//document.getElementById("pr_valid").innerHTML=user.validity;
						
				}

				$.mobile.changePage( "#homepage", { transition: "flip"} );
			}
			else
			{
				 $.mobile.changePage( "#profilepage", { transition: "flip"} );
			}*/
			if(localStorage.getItem("categorySelected")!==null && localStorage.getItem("categorySelected")!='null' && localStorage.getItem("categorySelected")!='' && localStorage.getItem("categorySelected")!='undefined')
			{
				var editPage = document.getElementById("editProfile_page");
				//var profilePage = document.getElementById("footerProfilePage");

				if(localStorage.getItem("categorySelected")=='Distributor')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-distributor"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Workshop')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-workshop"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Retailer')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-retailer"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Mechanic')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-machanic"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Consumer')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<a href="#page-form-consumer"><li><div class="fthumb-icon"><img src="assets/images/app_images/profile.png"></div>Profile</li></a>';
				}

				$.mobile.changePage( "#homepage", { transition: "flip"} );
			}else{
				toast("Category does't selected");
				logoutApp();
			}
			
		}
   }

   }
   else
   {
		 toast('Authenticantion failed');
		 $.mobile.changePage( "#otp_pg", { transition: "flip"} );
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernameidemitsu');
	pwd = localStorage.getItem('passwordidemitsu');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    user.trans_sms = localStorage.getItem('trans_sms');
    user.mktgsms = localStorage.getItem('mktgsms');
    user.cpns = localStorage.getItem('cpns');
    user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
    /*document.getElementById("pr_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	//document.getElementById("pr_valid").innerHTML=user.validity;*/
	   if(localStorage.getItem("imagedata")!=null)
	   {
		//document.getElementById("cardImagemenu").src = localStorage.getItem("imagedata");
		//document.getElementById("cardImagepunch").src = localStorage.getItem("imagedata");
	   }
     }
   });
  }
}

function authenticateDealer()
{
  var uname = $('#username_new').val();
  var pwd = $('#codeBox1').val()+$('#codeBox2').val()+$('#codeBox3').val()+$('#codeBox4').val();

  var phno = localStorage.getItem("phno");
    
  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number /Passcode');
 }
 else{
  $.ajax({
   url: SERVER+'mloyallogin_json.asp', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'username': uname, 'password': pwd},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {

         $('#codeBox1').val('');
         $('#codeBox2').val('');
         $('#codeBox3').val('');
         $('#codeBox4').val('');
   
	console.log("success"+JSON.stringify(data));
   if(data.status=='success'){
    user.balance = data.balance;
    user.firstname = data.firstname;
    user.id = data.id;
    user.lastname = data.lastname;
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	user.trans_sms = data.trans_sms;
	user.mktgsms = data.mktgsms;
	user.cpns = data.cpns;
    user.ads = data.ads;
	user.state = checkforundefined(data.customer_state);
    user.dob = data.dob;
    user.emailid = checkforundefined(data.emailid);
	user.store_code_idemitsu = checkforundefined(data.DealerCode);
	user.def_store = checkforundefined(data.store);
	user.datatype = checkforundefined(data.IdProof_Name);
	user.city = checkforundefined(data.City);
	user.district = checkforundefined(data.Distict);
	user.floor_flat = data.floor_flat;
	user.visit_frequency = data.visit_frequency;
	user.membership_slab = checkforundefined(data.slabid);
	user.uid_idemitsu = checkforundefined(data.uid);
	//user.vehicleno = checkforundefined(data.vehicleno);

	user.gst_no = checkforundefined(data.GST_No);
	user.pan_no = checkforundefined(data.PAN_No);
	user.pincode = checkforundefined(data.Postalcode);
	user.address = checkforundefined(data.location);
	user.VehicleOptions  = checkforundefined(data.VehicleModel);
	//user.WhereBuy = checkforundefined(data.DealerCode);
	user.WhereBuy = checkforundefined(data.Where_Buy);
	user.businessCategory  = checkforundefined(data.Business_Category_Type);
	user.companyName  = checkforundefined(data.Company_Shop_Name);
	user.ownerName  = checkforundefined(data.Owner_Name);
	user.docPhoto = checkforundefined(data.kyc_doc_photo);
    user.distown_code = checkforundefined(data.distributor_code);


	if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined')
		user.cpns='0';

	//console.log("user.firstname:"+user.firstname);
    
    $('#username').val('');
    $('#password_myacc').val('');
  
   localStorage.setItem('usernameidemitsu',uname);
   localStorage.setItem('passwordidemitsu',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('trans_sms',user.trans_sms);
   localStorage.setItem('mktgsms',user.mktgsms);
   localStorage.setItem('cpns',user.cpns);
   localStorage.setItem('ads',user.ads);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);
   localStorage.setItem('membership_slab',user.membership_slab);
   // localStorage.setItem('passworddd',pwd);

	
 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
 if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';
 if(user.store_code_idemitsu=='undefined' || user.store_code_idemitsu=='null' || user.store_code_idemitsu==null)
			user.store_code_idemitsu = 'HO-001';

			//$('#retailerFirstName').val(user.firstname);
			//$('#retailerLastName').val(user.lastname);
			$('#retailerVehicleOptions').val(user.businessCategory);
			$('#distributorCompanyName').val(user.firstname);
			$('#distributorOwnerName').val(user.ownerName);
			$('#distributorGstNo').val(user.gst_no);
			$('#distributorPanNo').val(user.pan_no);
			$('#distributorEmailId').val(user.emailid);
			$('#distributorPincode').val(user.pincode);
			$('#distributorLocation').val(user.address);
			$('#distributorCode').val(user.distown_code);
			//$('#retailerCity').val(user.city);
			//$('#retailerState').val(user.state);
			//$('#retailerWhereBuy').val(user.store_code_idemitsu);

    
	if(user.id != ''){
		var id1 = user.id.substring(0, 4);
		var id2 = user.id.substring(4, 8);
		var id3 = user.id.substring(8, 10);
	}
    if(user.firstname != '' || user.lastname != ''){
		var fn = user.firstname.substring(0, 1);
		var ln = user.lastname.substring(0, 1);
	}
	document.getElementById("sortname").innerHTML= fn+''+ln;
	document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
	document.getElementById("profilepts").innerHTML=user.balance;
    document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
    document.getElementById("profilepts1").innerHTML=user.balance;
	//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
	document.getElementById("pr_valid").innerHTML=user.validity;

	//document.getElementById("firm_nm").innerHTML= user.proprietorname;
	//document.getElementById("sap_code").innerHTML= user.sapcode;


  
	

	/*if(user.p_photo != '')
    {
		if(imageExists(user.p_photo))
		{
			document.getElementById("update_photo").src = user.p_photo;
			document.getElementById("update_photo_self").src = user.p_photo;
			document.getElementById("update_photo1").src = user.p_photo;
			localStorage.setItem('file_pphoto',user.p_photo);
		}
	}*/
	

	if(user.dob!='')
	{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		//$('#update_dob').val(yyyy+'-'+mm+'-'+dd);
		
	}

	var numbers = /^[0-9]+$/;
	if(user.state.trim()!='')
	{
		if(user.state.match(numbers))
		{
			$("#distributorState").val(user.state);
			fetchCitylist_1_new(user.state,'distributorPincode','distributorCity');
		}
		else
		{
	   
			$("#distributorState option").each(function() {
						  if($(this).text().indexOf(user.state)>=0) {
							 
							$(this).prop('selected', 'selected');            
						  }                        
			});
			var sval=$("#distributorState").val();
			fetchCitylist_1_new(sval,'distributorPincode','distributorCity');
		 }
	}


	 if(user.docPhoto != '')
	 {
		if(imageExists(user.docPhoto))
		{
			//document.getElementById("shop_photo").src = versionurl+'uploads/'+user.panphoto;
			document.getElementById("kycdoc_photo3").src = user.docPhoto;
			localStorage.setItem('docimg',user.docPhoto);
		}
	 }

	
	
	var existmemtype = data.Member_Type;
	if(typeof existmemtype == undefined || existmemtype == null || existmemtype == 'null')
		existmemtype = '';
	if(existmemtype == '')
	{
		$.mobile.changePage( "#form-btn-pg", { transition: "flip"} );
	}
	else
	{
        localStorage.setItem("categorySelected",existmemtype);

		if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
		{
			//document.getElementById('update_firstname').readOnly = false;
			//document.getElementById('update_lastname').readOnly = false;

			var editPage = document.getElementById("editProfile_page");
			//var profilePage = document.getElementById("footerProfilePage");

			if(localStorage.getItem("categorySelected")=='Distributor')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-distributor"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-distributor", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Workshop')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-workshop"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-workshop", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Retailer')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-retailer"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-retailer", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Mechanic')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-machanic"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-machanic", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Consumer')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<a href="#page-form-consumer"><li><div class="fthumb-icon"><img src="assets/images/app_images/profile.png"></div>Profile</li></a>';
					$.mobile.changePage( "#page-form-consumer", { transition: "flip"} );
			}
			else
			{
					toast("Category does't selected");
			}

			// $.mobile.changePage( "#page-forgot-password", { transition: "flip"} );
		}
		else
		{
			   
			/*if(localStorage.getItem("profiledone_idemitsu"))
			{
				
				if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
				{
					document.getElementById("profilenm").innerHTML= 'Guest';
					document.getElementById("profilenm1").innerHTML='Guest';
				}
				else
				{
					document.getElementById("sortname").innerHTML= fn+''+ln;
					document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts").innerHTML=user.balance;
					document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts1").innerHTML=user.balance;
					//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
					//document.getElementById("pr_valid").innerHTML=user.validity;
						
				}

				$.mobile.changePage( "#homepage", { transition: "flip"} );
			}
			else
			{
				 $.mobile.changePage( "#profilepage", { transition: "flip"} );
			}*/
			if(localStorage.getItem("categorySelected")!==null && localStorage.getItem("categorySelected")!='null' && localStorage.getItem("categorySelected")!='' && localStorage.getItem("categorySelected")!='undefined')
			{
				var editPage = document.getElementById("editProfile_page");
				//var profilePage = document.getElementById("footerProfilePage");

				if(localStorage.getItem("categorySelected")=='Distributor')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-distributor"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Workshop')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-workshop"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Retailer')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-retailer"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Mechanic')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-machanic"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Consumer')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<a href="#page-form-consumer"><li><div class="fthumb-icon"><img src="assets/images/app_images/profile.png"></div>Profile</li></a>';
				}

				$.mobile.changePage( "#homepage", { transition: "flip"} );
			}else{
				toast("Category does't selected");
				logoutApp();
			}
			
		}
   }

   }
   else
   {
		 toast('Authenticantion failed');
		 $.mobile.changePage( "#otp_pg", { transition: "flip"} );
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernameidemitsu');
	pwd = localStorage.getItem('passwordidemitsu');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    user.trans_sms = localStorage.getItem('trans_sms');
    user.mktgsms = localStorage.getItem('mktgsms');
    user.cpns = localStorage.getItem('cpns');
    user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
    /*document.getElementById("pr_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	//document.getElementById("pr_valid").innerHTML=user.validity;*/
	   if(localStorage.getItem("imagedata")!=null)
	   {
		//document.getElementById("cardImagemenu").src = localStorage.getItem("imagedata");
		//document.getElementById("cardImagepunch").src = localStorage.getItem("imagedata");
	   }
     }
   });
  }
}

function authenticateRetailer()
{
  var uname = $('#username_new').val();
  var pwd = $('#codeBox1').val()+$('#codeBox2').val()+$('#codeBox3').val()+$('#codeBox4').val();

  var phno = localStorage.getItem("phno");
    
  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number /Passcode');
 }
 else{
  $.ajax({
   url: SERVER+'mloyallogin_json.asp', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'username': uname, 'password': pwd},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {

         $('#codeBox1').val('');
         $('#codeBox2').val('');
         $('#codeBox3').val('');
         $('#codeBox4').val('');
   
	console.log("success"+JSON.stringify(data));
   if(data.status=='success'){
    user.balance = data.balance;
    user.firstname = data.firstname;
    user.id = data.id;
    user.lastname = data.lastname;
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	user.trans_sms = data.trans_sms;
	user.mktgsms = data.mktgsms;
	user.cpns = data.cpns;
    user.ads = data.ads;
	user.state = checkforundefined(data.customer_state);
    user.dob = data.dob;
    user.emailid = checkforundefined(data.emailid);
	user.store_code_idemitsu = checkforundefined(data.DealerCode);
	user.def_store = checkforundefined(data.store);
	user.datatype = checkforundefined(data.IdProof_Name);
	user.city = checkforundefined(data.City);
	user.district = checkforundefined(data.Distict);
	user.floor_flat = data.floor_flat;
	user.visit_frequency = data.visit_frequency;
	user.membership_slab = checkforundefined(data.slabid);
	user.uid_idemitsu = checkforundefined(data.uid);
	//user.vehicleno = checkforundefined(data.vehicleno);

	user.gst_no = checkforundefined(data.GST_No);
	user.pan_no = checkforundefined(data.PAN_No);
	user.pincode = checkforundefined(data.Postalcode);
	user.address = checkforundefined(data.location);
	user.VehicleOptions  = checkforundefined(data.VehicleModel);
	//user.WhereBuy = checkforundefined(data.DealerCode);
	user.WhereBuy = checkforundefined(data.Where_Buy);
	user.businessCategory  = checkforundefined(data.Business_Category_Type);
	user.companyName  = checkforundefined(data.Company_Shop_Name);
	user.ownerName  = checkforundefined(data.Owner_Name);
	user.docPhoto = checkforundefined(data.kyc_doc_photo);



	if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined')
		user.cpns='0';

	//console.log("user.firstname:"+user.firstname);
    
    $('#username').val('');
    $('#password_myacc').val('');
  
   localStorage.setItem('usernameidemitsu',uname);
   localStorage.setItem('passwordidemitsu',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('trans_sms',user.trans_sms);
   localStorage.setItem('mktgsms',user.mktgsms);
   localStorage.setItem('cpns',user.cpns);
   localStorage.setItem('ads',user.ads);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);
   localStorage.setItem('membership_slab',user.membership_slab);
   // localStorage.setItem('passworddd',pwd);

	
 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
 if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';
 if(user.store_code_idemitsu=='undefined' || user.store_code_idemitsu=='null' || user.store_code_idemitsu==null)
			user.store_code_idemitsu = 'HO-001';

			//$('#retailerFirstName').val(user.firstname);
			//$('#retailerLastName').val(user.lastname);
			$('#retailerVehicleOptions').val(user.businessCategory);
			$('#retailerCompanyName').val(user.firstname);
			$('#retailerOwnerName').val(user.ownerName);
			$('#retailerGstNo').val(user.gst_no);
			$('#retailerPanNo').val(user.pan_no);
			$('#retailerEmailId').val(user.emailid);
			$('#retailerPincode').val(user.pincode);
			$('#retailerLocation').val(user.address);
			//$('#retailerCity').val(user.city);
			//$('#retailerState').val(user.state);
			$('#retailerWhereBuy').val(user.WhereBuy);

    
	if(user.id != ''){
		var id1 = user.id.substring(0, 4);
		var id2 = user.id.substring(4, 8);
		var id3 = user.id.substring(8, 10);
	}
    if(user.firstname != '' || user.lastname != ''){
		var fn = user.firstname.substring(0, 1);
		var ln = user.lastname.substring(0, 1);
	}
	document.getElementById("sortname").innerHTML= fn+''+ln;
	document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
	document.getElementById("profilepts").innerHTML=user.balance;
    document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
    document.getElementById("profilepts1").innerHTML=user.balance;
	//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
	document.getElementById("pr_valid").innerHTML=user.validity;

	//document.getElementById("firm_nm").innerHTML= user.proprietorname;
	//document.getElementById("sap_code").innerHTML= user.sapcode;


  
	

	/*if(user.p_photo != '')
    {
		if(imageExists(user.p_photo))
		{
			document.getElementById("update_photo").src = user.p_photo;
			document.getElementById("update_photo_self").src = user.p_photo;
			document.getElementById("update_photo1").src = user.p_photo;
			localStorage.setItem('file_pphoto',user.p_photo);
		}
	}*/
	

	if(user.dob!='')
	{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		//$('#update_dob').val(yyyy+'-'+mm+'-'+dd);
		
	}

	var numbers = /^[0-9]+$/;
	if(user.state.trim()!='')
	{
		if(user.state.match(numbers))
		{
			$("#retailerState").val(user.state);
			fetchCitylist_1_new(user.state,'retailerPincode','retailerCity');
		}
		else
		{
			$("#retailerState option").each(function() {
						  if($(this).text().indexOf(user.state)>=0) {
							 
							$(this).prop('selected', 'selected');            
						  }                        
			});
			var sval=$("#retailerState").val();
			fetchCitylist_1_new(user.state,'retailerPincode','retailerCity');
		 }
	}


	 if(user.docPhoto != '')
	 {
		if(imageExists(user.docPhoto))
		{
			//document.getElementById("shop_photo").src = versionurl+'uploads/'+user.panphoto;
			document.getElementById("kycdoc_photo").src = user.docPhoto;
			localStorage.setItem('docimg',user.docPhoto);
		}
	 }

	
	
	var existmemtype = data.Member_Type;
	if(typeof existmemtype == undefined || existmemtype == null || existmemtype == 'null')
		existmemtype = '';
	if(existmemtype == '')
	{
		$.mobile.changePage( "#form-btn-pg", { transition: "flip"} );
	}
	else
	{
        localStorage.setItem("categorySelected",existmemtype);

		if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
		{
			//document.getElementById('update_firstname').readOnly = false;
			//document.getElementById('update_lastname').readOnly = false;

			var editPage = document.getElementById("editProfile_page");
			//var profilePage = document.getElementById("footerProfilePage");

			if(localStorage.getItem("categorySelected")=='Distributor')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-distributor"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-distributor", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Workshop')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-workshop"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-workshop", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Retailer')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-retailer"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-retailer", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Mechanic')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-machanic"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-machanic", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Consumer')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<a href="#page-form-consumer"><li><div class="fthumb-icon"><img src="assets/images/app_images/profile.png"></div>Profile</li></a>';
					$.mobile.changePage( "#page-form-consumer", { transition: "flip"} );
			}
			else
			{
					toast("Category does't selected");
			}

			// $.mobile.changePage( "#page-forgot-password", { transition: "flip"} );
		}
		else
		{
			   
			/*if(localStorage.getItem("profiledone_idemitsu"))
			{
				
				if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
				{
					document.getElementById("profilenm").innerHTML= 'Guest';
					document.getElementById("profilenm1").innerHTML='Guest';
				}
				else
				{
					document.getElementById("sortname").innerHTML= fn+''+ln;
					document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts").innerHTML=user.balance;
					document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts1").innerHTML=user.balance;
					//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
					//document.getElementById("pr_valid").innerHTML=user.validity;
						
				}

				$.mobile.changePage( "#homepage", { transition: "flip"} );
			}
			else
			{
				 $.mobile.changePage( "#profilepage", { transition: "flip"} );
			}*/
			if(localStorage.getItem("categorySelected")!==null && localStorage.getItem("categorySelected")!='null' && localStorage.getItem("categorySelected")!='' && localStorage.getItem("categorySelected")!='undefined')
			{
				var editPage = document.getElementById("editProfile_page");
				//var profilePage = document.getElementById("footerProfilePage");

				if(localStorage.getItem("categorySelected")=='Distributor')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-distributor"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Workshop')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-workshop"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Retailer')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-retailer"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Mechanic')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-machanic"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Consumer')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<a href="#page-form-consumer"><li><div class="fthumb-icon"><img src="assets/images/app_images/profile.png"></div>Profile</li></a>';
				}

				$.mobile.changePage( "#homepage", { transition: "flip"} );
			}else{
				toast("Category does't selected");
				logoutApp();
			}
			
		}
   }

   }
   else
   {
		 toast('Authenticantion failed');
		 $.mobile.changePage( "#otp_pg", { transition: "flip"} );
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernameidemitsu');
	pwd = localStorage.getItem('passwordidemitsu');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    user.trans_sms = localStorage.getItem('trans_sms');
    user.mktgsms = localStorage.getItem('mktgsms');
    user.cpns = localStorage.getItem('cpns');
    user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
    /*document.getElementById("pr_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	//document.getElementById("pr_valid").innerHTML=user.validity;*/
	   if(localStorage.getItem("imagedata")!=null)
	   {
		//document.getElementById("cardImagemenu").src = localStorage.getItem("imagedata");
		//document.getElementById("cardImagepunch").src = localStorage.getItem("imagedata");
	   }
     }
   });
  }
}

function authenticateMechanic()
{
  var uname = $('#username_new').val();
  var pwd = $('#codeBox1').val()+$('#codeBox2').val()+$('#codeBox3').val()+$('#codeBox4').val();

  var phno = localStorage.getItem("phno");
    
  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number /Passcode');
 }
 else{
  $.ajax({
    url: SERVER+'mloyallogin_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'username': uname, 'password': pwd},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {

         $('#codeBox1').val('');
         $('#codeBox2').val('');
         $('#codeBox3').val('');
         $('#codeBox4').val('');
   
	console.log("success"+JSON.stringify(data));
   if(data.status=='success'){
    user.balance = data.balance;
    user.firstname = data.firstname;
    user.id = data.id;
    user.lastname = data.lastname;
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	user.trans_sms = data.trans_sms;
	user.mktgsms = data.mktgsms;
	user.cpns = data.cpns;
    user.ads = data.ads;
	user.state = checkforundefined(data.customer_state);
    user.dob = data.dob;
    user.emailid = checkforundefined(data.emailid);
	user.store_code_idemitsu = checkforundefined(data.DealerCode);
	user.def_store = checkforundefined(data.store);
	user.datatype = checkforundefined(data.IdProof_Name);
	user.city = checkforundefined(data.City);
	user.district = checkforundefined(data.Distict);
	user.floor_flat = data.floor_flat;
	user.visit_frequency = data.visit_frequency;
	user.membership_slab = checkforundefined(data.slabid);
	user.uid_idemitsu = checkforundefined(data.uid);
	//user.vehicleno = checkforundefined(data.vehicleno);

	user.gst_no = checkforundefined(data.GST_No);
	user.pincode = checkforundefined(data.Postalcode);
	user.address = checkforundefined(data.location);
	user.VehicleOptions  = checkforundefined(data.VehicleModel);
	//user.WhereBuy = checkforundefined(data.DealerCode);
	user.WhereBuy = checkforundefined(data.Where_Buy);
	user.businessCategory  = checkforundefined(data.Business_Category_Type);
	user.companyName  = checkforundefined(data.Company_Shop_Name);
	user.ownerName  = checkforundefined(data.Owner_Name);



	if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined')
		user.cpns='0';

	//console.log("user.firstname:"+user.firstname);
    
    $('#username').val('');
    $('#password_myacc').val('');
  
   localStorage.setItem('usernameidemitsu',uname);
   localStorage.setItem('passwordidemitsu',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('trans_sms',user.trans_sms);
   localStorage.setItem('mktgsms',user.mktgsms);
   localStorage.setItem('cpns',user.cpns);
   localStorage.setItem('ads',user.ads);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);
   localStorage.setItem('membership_slab',user.membership_slab);
   // localStorage.setItem('passworddd',pwd);

	
 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
 if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';
 if(user.store_code_idemitsu=='undefined' || user.store_code_idemitsu=='null' || user.store_code_idemitsu==null)
			user.store_code_idemitsu = 'HO-001';

			$('#machanicFirstName').val(user.firstname);
			//$('#machanicLastName').val(user.lastname);
			$('#machanicVehicleOptions').val(user.businessCategory);
			//$('#machanicCompanyName').val(user.companyName);
			//$('#machanicOwnerName').val(user.ownerName);
			//$('#machanicGstNo').val(user.gst_no);
			$('#machanicEmailId').val(user.emailid);
			$('#machanicPincode').val(user.pincode);
			$('#machanicLocation').val(user.address);
			//$('#machanicCity').val(user.city);
			//$('#machanicState').val(user.state);
			//$('#machanicDistributor').val(user.store_code_idemitsu);
            
	if(user.id != ''){
		var id1 = user.id.substring(0, 4);
		var id2 = user.id.substring(4, 8);
		var id3 = user.id.substring(8, 10);
	}
    if(user.firstname != '' || user.lastname != ''){
		var fn = user.firstname.substring(0, 1);
		var ln = user.lastname.substring(0, 1);
	}
	document.getElementById("sortname").innerHTML= fn+''+ln;
	document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
	document.getElementById("profilepts").innerHTML=user.balance;
    document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
    document.getElementById("profilepts1").innerHTML=user.balance;
	//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
	document.getElementById("pr_valid").innerHTML=user.validity;

	//document.getElementById("firm_nm").innerHTML= user.proprietorname;
	//document.getElementById("sap_code").innerHTML= user.sapcode;


  
	

	/*if(user.p_photo != '')
    {
		if(imageExists(user.p_photo))
		{
			document.getElementById("update_photo").src = user.p_photo;
			document.getElementById("update_photo_self").src = user.p_photo;
			document.getElementById("update_photo1").src = user.p_photo;
			localStorage.setItem('file_pphoto',user.p_photo);
		}
	}*/
	

	if(user.dob!='')
	{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		//$('#update_dob').val(yyyy+'-'+mm+'-'+dd);
		
	}

	var numbers = /^[0-9]+$/;
	if(user.state.trim()!='')
	{
		if(user.state.match(numbers))
		{
			$("#machanicState").val(user.state);
			fetchCitylist_1_new(user.state,'machanicPincode','machanicCity');
		}
		else
		{
	   
			$("#machanicState option").each(function() {
						  if($(this).text().indexOf(user.state)>=0) {
							 
							$(this).prop('selected', 'selected');            
						  }                        
			});
			var sval=$("#machanicState").val();
			fetchCitylist_1_new(sval,'machanicPincode','machanicCity');
		 }
	}

	
	
	var existmemtype = data.Member_Type;
	if(typeof existmemtype == undefined || existmemtype == null || existmemtype == 'null')
		existmemtype = '';
	if(existmemtype == '')
	{
		$.mobile.changePage( "#form-btn-pg", { transition: "flip"} );
	}
	else
	{
        localStorage.setItem("categorySelected",existmemtype);

		if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
		{
			//document.getElementById('update_firstname').readOnly = false;
			//document.getElementById('update_lastname').readOnly = false;

			var editPage = document.getElementById("editProfile_page");
			//var profilePage = document.getElementById("footerProfilePage");

			if(localStorage.getItem("categorySelected")=='Distributor')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-distributor"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-distributor", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Workshop')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-workshop"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-workshop", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Retailer')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-retailer"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-retailer", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Mechanic')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-machanic"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-machanic", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Consumer')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<a href="#page-form-consumer"><li><div class="fthumb-icon"><img src="assets/images/app_images/profile.png"></div>Profile</li></a>';
					$.mobile.changePage( "#page-form-consumer", { transition: "flip"} );
			}
			else
			{
					toast("Category does't selected");
			}

			// $.mobile.changePage( "#page-forgot-password", { transition: "flip"} );
		}
		else
		{
			   
			/*if(localStorage.getItem("profiledone_idemitsu"))
			{
				
				if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
				{
					document.getElementById("profilenm").innerHTML= 'Guest';
					document.getElementById("profilenm1").innerHTML='Guest';
				}
				else
				{
					document.getElementById("sortname").innerHTML= fn+''+ln;
					document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts").innerHTML=user.balance;
					document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts1").innerHTML=user.balance;
					//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
					//document.getElementById("pr_valid").innerHTML=user.validity;
						
				}

				$.mobile.changePage( "#homepage", { transition: "flip"} );
			}
			else
			{
				 $.mobile.changePage( "#profilepage", { transition: "flip"} );
			}*/
			if(localStorage.getItem("categorySelected")!==null && localStorage.getItem("categorySelected")!='null' && localStorage.getItem("categorySelected")!='' && localStorage.getItem("categorySelected")!='undefined')
			{
				var editPage = document.getElementById("editProfile_page");
				//var profilePage = document.getElementById("footerProfilePage");

				if(localStorage.getItem("categorySelected")=='Distributor')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-distributor"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Workshop')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-workshop"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Retailer')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-retailer"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Mechanic')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-machanic"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Consumer')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<a href="#page-form-consumer"><li><div class="fthumb-icon"><img src="assets/images/app_images/profile.png"></div>Profile</li></a>';
				}

				$.mobile.changePage( "#homepage", { transition: "flip"} );
			}else{
				toast("Category does't selected");
				logoutApp();
			}
			
		}
   }

   }
   else
   {
		 toast('Authenticantion failed');
		 $.mobile.changePage( "#otp_pg", { transition: "flip"} );
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernameidemitsu');
	pwd = localStorage.getItem('passwordidemitsu');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    user.trans_sms = localStorage.getItem('trans_sms');
    user.mktgsms = localStorage.getItem('mktgsms');
    user.cpns = localStorage.getItem('cpns');
    user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
    /*document.getElementById("pr_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	//document.getElementById("pr_valid").innerHTML=user.validity;*/
	   if(localStorage.getItem("imagedata")!=null)
	   {
		//document.getElementById("cardImagemenu").src = localStorage.getItem("imagedata");
		//document.getElementById("cardImagepunch").src = localStorage.getItem("imagedata");
	   }
     }
   });
  }
}

function checkdistributor(str){
	var data = $('#'+str).val();
	console.log(data);
	$.ajax({
		url: SERVER2+'chk_distributor_code_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI', 'apipswd': 'Ml0yalAP!2o14','distributorcode': '235009'+data},
		complete: function(xhr, textStatus) {
		},
		success: function(data, textStatus, xhr) {
			// console.log(data);
			if(data.error){
               console.log(data.error);
			}else{
			   $('#'+str).val('');
			}
		}
	});
}

function authenticateConsumer()
{
  var uname = $('#username_new').val();
  var pwd = $('#codeBox1').val()+$('#codeBox2').val()+$('#codeBox3').val()+$('#codeBox4').val();

  var phno = localStorage.getItem("phno");
    
  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number /Passcode');
 }
 else{
  $.ajax({
    url: SERVER+'mloyallogin_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'username': uname, 'password': pwd},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {

         $('#codeBox1').val('');
         $('#codeBox2').val('');
         $('#codeBox3').val('');
         $('#codeBox4').val('');
   
	console.log("success"+JSON.stringify(data));
   if(data.status=='success'){
    user.balance = data.balance;
    user.firstname = data.firstname;
    user.id = data.id;
    user.lastname = data.lastname;
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	user.trans_sms = data.trans_sms;
	user.mktgsms = data.mktgsms;
	user.cpns = data.cpns;
    user.ads = data.ads;
	user.state = checkforundefined(data.customer_state);
    user.dob = data.dob;
    user.emailid = checkforundefined(data.emailid);
	user.store_code_idemitsu = checkforundefined(data.DealerCode);
	user.def_store = checkforundefined(data.store);
	user.datatype = checkforundefined(data.IdProof_Name);
	user.city = checkforundefined(data.City);
	user.district = checkforundefined(data.Distict);
	user.floor_flat = data.floor_flat;
	user.visit_frequency = data.visit_frequency;
	user.membership_slab = checkforundefined(data.slabid);
	user.uid_idemitsu = checkforundefined(data.uid);
	//user.vehicleno = checkforundefined(data.vehicleno);
	user.VehicleMGF = checkforundefined(data.VehicleManufacturer);
	user.VehicleModel = checkforundefined(data.VehicleModel);
	user.LUEO = checkforundefined(data.LastUsedEngineOil);

	user.gst_no = checkforundefined(data.GST_No);
	user.pincode = checkforundefined(data.Postalcode);
	user.address = checkforundefined(data.location);
	user.VehicleOptions  = checkforundefined(data.VehicleModel);
	//user.WhereBuy = checkforundefined(data.DealerCode);
	user.WhereBuy = checkforundefined(data.Where_Buy);
	user.businessCategory  = checkforundefined(data.Business_Category_Type);
	user.companyName  = checkforundefined(data.Company_Shop_Name);
	user.ownerName  = checkforundefined(data.Owner_Name);



	if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined')
		user.cpns='0';

	//console.log("user.firstname:"+user.firstname);
    
    $('#username').val('');
    $('#password_myacc').val('');
  
   localStorage.setItem('usernameidemitsu',uname);
   localStorage.setItem('passwordidemitsu',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('trans_sms',user.trans_sms);
   localStorage.setItem('mktgsms',user.mktgsms);
   localStorage.setItem('cpns',user.cpns);
   localStorage.setItem('ads',user.ads);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);
   localStorage.setItem('membership_slab',user.membership_slab);
   // localStorage.setItem('passworddd',pwd);

	
 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
 if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';
 if(user.store_code_idemitsu=='undefined' || user.store_code_idemitsu=='null' || user.store_code_idemitsu==null)
			user.store_code_idemitsu = 'HO-001';

			
			$('#consumerFirstName').val(user.firstname);
			//$('#consumerLastName').val(user.lastname);
			$('#consumerEmailId').val(user.emailid);
			//$('#consumerCity').val(user.city);
			//$('#consumerState').val(user.state);
			$('#consumerLocation').val(user.address);
			$('#consumerPincode').val(user.pincode);
			$('#consumerVehicleMGF').val(user.VehicleMGF);
            $('#consumerVehicleModel').val(user.VehicleModel);
            $('#consumerLUEO').val(user.LUEO);
			//$('#consumerDistributor').val(user.store_code_idemitsu);
            
	if(user.id != ''){
		var id1 = user.id.substring(0, 4);
		var id2 = user.id.substring(4, 8);
		var id3 = user.id.substring(8, 10);
	}
    if(user.firstname != '' || user.lastname != ''){
		var fn = user.firstname.substring(0, 1);
		var ln = user.lastname.substring(0, 1);
	}
	document.getElementById("sortname").innerHTML= fn+''+ln;
	document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
	document.getElementById("profilepts").innerHTML=user.balance;
    document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
    document.getElementById("profilepts1").innerHTML=user.balance;
	//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
	document.getElementById("pr_valid").innerHTML=user.validity;

	//document.getElementById("firm_nm").innerHTML= user.proprietorname;
	//document.getElementById("sap_code").innerHTML= user.sapcode;


  
	

	/*if(user.p_photo != '')
    {
		if(imageExists(user.p_photo))
		{
			document.getElementById("update_photo").src = user.p_photo;
			document.getElementById("update_photo_self").src = user.p_photo;
			document.getElementById("update_photo1").src = user.p_photo;
			localStorage.setItem('file_pphoto',user.p_photo);
		}
	}*/
	

	if(user.dob!='')
	{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		//$('#update_dob').val(yyyy+'-'+mm+'-'+dd);
		
	}

	var numbers = /^[0-9]+$/;
	if(user.state.trim()!='')
	{
		if(user.state.match(numbers))
		{
			$("#consumerState").val(user.state);
			fetchCitylist_1_new(user.state,'consumerPincode','consumerCity');
		}
		else
		{
	   
			$("#consumerState option").each(function() {
						  if($(this).text().indexOf(user.state)>=0) {
							 
							$(this).prop('selected', 'selected');            
						  }                        
			});
			var sval=$("#consumerState").val();
			fetchCitylist_1_new(user.state,'consumerPincode','consumerCity');
		 }
	}

	
	
	var existmemtype = data.Member_Type;
	if(typeof existmemtype == undefined || existmemtype == null || existmemtype == 'null')
		existmemtype = '';
	if(existmemtype == '')
	{
		$.mobile.changePage( "#form-btn-pg", { transition: "flip"} );
	}
	else
	{
        localStorage.setItem("categorySelected",existmemtype);

		if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
		{
			//document.getElementById('update_firstname').readOnly = false;
			//document.getElementById('update_lastname').readOnly = false;

			var editPage = document.getElementById("editProfile_page");
			//var profilePage = document.getElementById("footerProfilePage");

			if(localStorage.getItem("categorySelected")=='Distributor')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-distributor"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-distributor", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Workshop')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-workshop"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-workshop", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Retailer')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-retailer"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-retailer", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Mechanic')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-machanic"><img src="assets/images/app_images/profile.png"></a></div>';
					$.mobile.changePage( "#page-form-machanic", { transition: "flip"} );
			}
			else if(localStorage.getItem("categorySelected")=='Consumer')
			{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<a href="#page-form-consumer"><li><div class="fthumb-icon"><img src="assets/images/app_images/profile.png"></div>Profile</li></a>';
					$.mobile.changePage( "#page-form-consumer", { transition: "flip"} );
			}
			else
			{
					toast("Category does't selected");
			}

			// $.mobile.changePage( "#page-forgot-password", { transition: "flip"} );
		}
		else
		{
			   
			/*if(localStorage.getItem("profiledone_idemitsu"))
			{
				
				if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
				{
					document.getElementById("profilenm").innerHTML= 'Guest';
					document.getElementById("profilenm1").innerHTML='Guest';
				}
				else
				{
					document.getElementById("sortname").innerHTML= fn+''+ln;
					document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts").innerHTML=user.balance;
					document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts1").innerHTML=user.balance;
					//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
					//document.getElementById("pr_valid").innerHTML=user.validity;
						
				}

				$.mobile.changePage( "#homepage", { transition: "flip"} );
			}
			else
			{
				 $.mobile.changePage( "#profilepage", { transition: "flip"} );
			}*/
			if(localStorage.getItem("categorySelected")!==null && localStorage.getItem("categorySelected")!='null' && localStorage.getItem("categorySelected")!='' && localStorage.getItem("categorySelected")!='undefined')
			{
				var editPage = document.getElementById("editProfile_page");
				//var profilePage = document.getElementById("footerProfilePage");

				if(localStorage.getItem("categorySelected")=='Distributor')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-distributor"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Workshop')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-workshop"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Retailer')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-retailer"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Mechanic')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<div class="fthumb-icon"><a href="#page-form-machanic"><img src="assets/images/app_images/profile.png"></a></div>';
				}
			    else if(localStorage.getItem("categorySelected")=='Consumer')
				{
					editPage.innerHTML='<a href="javascript:footerProfilePage();" ><img src="./assets/images/app_images/nav-profile.png" class="img-responsive"> <span>Edit Profile</span> </a>';
					//profilePage.innerHTML='<a href="#page-form-consumer"><li><div class="fthumb-icon"><img src="assets/images/app_images/profile.png"></div>Profile</li></a>';
				}

				$.mobile.changePage( "#homepage", { transition: "flip"} );
			}else{
				toast("Category does't selected");
				logoutApp();
			}
			
		}
   }

   }
   else
   {
		 toast('Authenticantion failed');
		 $.mobile.changePage( "#otp_pg", { transition: "flip"} );
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernameidemitsu');
	pwd = localStorage.getItem('passwordidemitsu');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    user.trans_sms = localStorage.getItem('trans_sms');
    user.mktgsms = localStorage.getItem('mktgsms');
    user.cpns = localStorage.getItem('cpns');
    user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
    /*document.getElementById("pr_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	//document.getElementById("pr_valid").innerHTML=user.validity;*/
	   if(localStorage.getItem("imagedata")!=null)
	   {
		//document.getElementById("cardImagemenu").src = localStorage.getItem("imagedata");
		//document.getElementById("cardImagepunch").src = localStorage.getItem("imagedata");
	   }
     }
   });
  }
}

// ################################ - Update pages - ################################
function updateDistributor_old()
{
		var firstname = $('#distributorFirstName').val();
		//var lastname = $('#distributorLastName').val();
		var mobile = $('#distributorMobile').val();
		//var distributorCode = $('#distributorCode').val();
		var distributorCompanyName = $('#distributorCompanyName').val();
		var distributorOwnerName = $('#distributorOwnerName').val();
		var distributorGstNo = $('#distributorGstNo').val();
		var distributorPanNo = $('#distributorPanNo').val();
		var distributorEmailId = $('#distributorEmailId').val();
		var distributorCity = $("#distributorCity option:selected").text();
		var distributorState = $("#distributorState option:selected").text();
		var distributorPincode = $('#distributorPincode').val();
        
		
		
    if(firstname.trim()==''|| distributorCompanyName.trim()=='' || distributorOwnerName.trim()=='' || mobile.trim()=='')
	{
		toast('Please enter mandatory fields.');
	}
	else if(mobile.length!=10)
    {
		toast('Please enter valid Mobile Number');
	}
	else
	{
    
	 $.ajax({
			url: SERVER2+'add_dealer_json_api.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'CompanyName': distributorCompanyName,
				'DealerName': firstname,
				'OwnerName': distributorOwnerName,
				'GSTNo': distributorGstNo,
				'PANNo': distributorPanNo,
				'EmailId': distributorEmailId,
				'Mobnumber': mobile,
                'DealerCode': 'idem'+mobile,
				'City': distributorCity,
				'State': distributorState,
				'Postalcode': distributorPincode
			},
			success: function(data, textStatus, xhr) {
                
				data=JSON.parse(data);
				console.log(JSON.stringify(data));

				if(data.error.length>0)
				{
					toast(data.error);
				}
				else
				{
				    toast('Distributor has been added!');
					$.mobile.changePage( "#page-login-dealer", { transition: "flip"} );
				}
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
  }
		
}

function updateDistributor()
{
		//var firstname = $('#distributorFirstName').val();
		//var lastname = $('#retailerLastName').val();
		var mobile = user.mobile;
		var code = $('#distributorCode').val();
		var distributorCode = '235009'+code;
        var distributorCompanyName = $('#distributorCompanyName').val();
        var distributorOwnerName = $('#distributorOwnerName').val();
		var emailUpdate = $('#distributorEmailId').val();
        var distributorGstNo = $('#distributorGstNo').val();
		var distributorPanno = $('#distributorPanNo').val();
        var distributorPincode = $('#distributorPincode').val();
		var distributorState = $('#distributorState').val();
        var distributorCity = $('#distributorCity').val();
		var distributorLocation = $('#distributorLocation').val();
		

		var docimg = localStorage.getItem('docimg');

		
	if(distributorCode.trim()=='' || distributorCompanyName.trim()=='' || distributorOwnerName.trim()=='' || distributorPincode.trim()=='' || distributorGstNo.trim()=='' || distributorPanno.trim()=='' || emailUpdate.trim()=='')
	{
		toast('Please enter mandatory fields.');
	}
	else if(checkforundefined(docimg)=='')
    {
		  toast('Please upload PAN photo');
		  $('#kycdoc_photo3').focus();
		  $('#kycdoc_photo3').scrollIntoView();
	}
	else if(distributorState=='' || distributorState=='undefined' || distributorState=='null' || distributorState==null)
    {
	     toast('Please select state');
		 $('#distributorState').focus();
         $('#distributorState').scrollIntoView();
    }
	else if(distributorCity=='' || distributorCity=='undefined' || distributorCity=='null' || distributorCity==null)
    {
	     toast('Please select city');
		 $('#distributorCity').focus();
         $('#distributorCity').scrollIntoView();
    }
	else
	{
    
	 $.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				'FirstName': distributorCompanyName,
				'LastName': '',
				'deviceid': reg_id,
				'cname':'',
				'mobileno': user.mobile,
				'Emailid': emailUpdate,
				'dd': '',
				'mm': '',
				'yy': '',
                'deviceType': '',
				'doaday': '',
				'doamonth': '',
				'doayear': '',
				'FlatNo': '',
				'Pincode': distributorPincode,
				'State': distributorState,
				'City': distributorCity,
				'Location': distributorLocation,
				'DealerCode': 'HO-001',
				'PANNo': distributorPanno,
				'kyc_doc_photo': docimg,
				'GSTNo': distributorGstNo,
				'VehicleNo': '',
				'VehicleModel': '',
				'VehicleManufacturer': '',
			    'LastUsedEngineOil': '',
                'Business_Category_Type': '',
				'Company_Shop_Name': distributorCompanyName,
				'Owner_Name': distributorOwnerName,
				'distributor_code': distributorCode,
				'Member_Type': 'Distributor'
				
			},
			success: function(data, textStatus, xhr) {

				
				localStorage.setItem("profiledone_idemitsu","Yes");
				
				if (data.indexOf("Success")>=0)
				{
						toast('Your profile has been updated successfully.');
						user.firstname=distributorCompanyName;
						user.lastname='';
						// user.emailid=email;

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
					

				
				if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
				{
					document.getElementById("profilenm").innerHTML= 'Guest';
					document.getElementById("profilenm1").innerHTML='Guest';
				}
				else
				{
					var fn='';
					var ln='';
					if(user.firstname != '')
					{
						fn = user.firstname.substring(0, 1);
					}
					if(user.lastname != '')
					{
						ln = user.lastname.substring(0, 1);
					}
					if(user.id != '')
					{
						var id1 = user.id.substring(0, 4);
						var id2 = user.id.substring(4, 8);
						var id3 = user.id.substring(8, 10);
					}

					document.getElementById("sortname").innerHTML= fn+''+ln;
					document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts").innerHTML=user.balance;
					document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts1").innerHTML=user.balance;
					//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
					document.getElementById("pr_valid").innerHTML=user.validity;

					//document.getElementById("firm_nm").innerHTML= user.proprietorname;
					//document.getElementById("sap_code").innerHTML= user.sapcode;
						
				}
					
				$.mobile.changePage( "#homepage", {transition: "flip"} );
		         
				
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
  }
		
}

function updateWorkshop()
{
		//var firstname = $('#workshopFirstName').val();
		//var lastname = $('#workshopLastName').val();
		var emailUpdate = $('#workshopEmailId').val();
		var mobile = user.mobile;
        var workshopbtype = $('#workshopVehicleOptions').val();
        var workshopCompanyName = $('#workshopCompanyName').val();
        var workshopOwnerName = $('#workshopOwnerName').val();
        var workshopGstNo = $('#workshopGstNo').val();
		var workshopPanno = $('#workshopPanNo').val();
        var workshoppincode = $('#workshopPincode').val();
		var workshopState = $('#workshopState').val();
        var workshopCity = $('#workshopCity').val();
		var workshopLocation = $('#workshopLocation').val();
        var workshopWhereBuy = $('#workshopWhereBuy').val();

		var docimg = localStorage.getItem('docimg');
      
        
		
		// var mm ='';
		// var dd ='';
		// var dd1 ='';
		// var yyyy = '';
		// var yyyy1 = '';

		/*var birthday = $('#dob_update').val();

		if(birthday!='')
		{
			var dob = birthday.split('-');
			mm = dob.length == 3 ? dob[1] : '';
			dd = dob.length == 3 ? dob[0] : '';
			dd1 = dob.length == 3 ? dob[0] : '';

			yyyy = dob.length == 3 ? dob[2] : '';
			yyyy1 = dob.length == 3 ? dob[2] : '';

           //$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
		
		}*/
		// if(dd.length==4)
		// {
		// 	yyyy=dd1;
		// 	dd=yyyy1;
		// }
	

	if(workshoppincode.trim()=='' || workshopCompanyName.trim()=='' || workshopOwnerName.trim()=='' || workshopGstNo.trim()=='' || workshopPanno.trim()=='')
	{
		toast('Please enter mandatory fields.');
	}
	else if(workshopbtype=='' || workshopbtype=='undefined' || workshopbtype=='null' || workshopbtype==null)
    {
	     toast('Please select business type');
		 $('#workshopVehicleOptions').focus();
         $('#workshopVehicleOptions').scrollIntoView();
    }
	else if(checkforundefined(docimg)=='')
    {
		  toast('Please upload PAN photo');
		  $('#kycdoc_photo2').focus();
		  $('#kycdoc_photo2').scrollIntoView();
	}
	else if(workshopState=='' || workshopState=='undefined' || workshopState=='null' || workshopState==null)
    {
	     toast('Please select state');
		 $('#workshopState').focus();
         $('#workshopState').scrollIntoView();
    }
	else if(workshopCity=='' || workshopCity=='undefined' || workshopCity=='null' || workshopCity==null)
    {
	     toast('Please select city');
		 $('#workshopCity').focus();
         $('#workshopCity').scrollIntoView();
    }
	else if(workshopLocation.trim()=='')
    {
	     toast('Please enter location');
    }
	/*else if(workshopWhereBuy=='' || workshopWhereBuy==undefined || workshopWhereBuy==null)
	{
		toast('Please check from where you buy');
	}*/
	else
	{
    
	 $.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				'FirstName': workshopCompanyName,
				'LastName': '',
				'deviceid': reg_id,
				'cname':'',
				'mobileno': user.mobile,
				'Emailid': emailUpdate,
				'dd': '',
				'mm': '',
				'yy': '',
                'deviceType': '',
				'doaday': '',
				'doamonth': '',
				'doayear': '',
				'FlatNo': '',
				'Pincode': workshoppincode,
				'State': workshopState,
				'City': workshopCity,
				'Location': workshopLocation,
				'DealerCode': 'HO-001',
				'PANNo': workshopPanno,
				'GSTNo': workshopGstNo,
				'kyc_doc_photo': docimg,
				'VehicleNo': '',
				'VehicleModel': '',
				'VehicleManufacturer': '',
			    'LastUsedEngineOil': '',
                'Business_Category_Type': workshopbtype,
				'Company_Shop_Name': workshopCompanyName,
				'Owner_Name': workshopOwnerName,
				'Member_Type': 'Workshop',
				'Where_Buy': workshopWhereBuy
				
			},
			success: function(data, textStatus, xhr) {

				
				localStorage.setItem("profiledone_idemitsu","Yes");
				
				if (data.indexOf("Success")>=0)
				{
						toast('Your profile has been updated successfully.');
						user.firstname=workshopCompanyName;
						//user.lastname=lastname;
						//user.emailid=email;

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
					

				
				if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
				{
					document.getElementById("profilenm").innerHTML= 'Guest';
					document.getElementById("profilenm1").innerHTML='Guest';
				}
				else
				{
					var fn='';
					var ln='';
					if(user.firstname != '')
					{
						fn = user.firstname.substring(0, 1);
					}
					if(user.lastname != '')
					{
						ln = user.lastname.substring(0, 1);
					}
					if(user.id != '')
					{
						var id1 = user.id.substring(0, 4);
						var id2 = user.id.substring(4, 8);
						var id3 = user.id.substring(8, 10);
					}

					document.getElementById("sortname").innerHTML= fn+''+ln;
					document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts").innerHTML=user.balance;
					document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts1").innerHTML=user.balance;
					//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
					document.getElementById("pr_valid").innerHTML=user.validity;

					//document.getElementById("firm_nm").innerHTML= user.proprietorname;
					//document.getElementById("sap_code").innerHTML= user.sapcode;
						
				}
					
				$.mobile.changePage( "#homepage", {transition: "flip"} );
		         
				
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
  }
		
}

function updateRetailer()
{
		//var firstname = $('#retailerFirstName').val();
		//var lastname = $('#retailerLastName').val();
		var emailUpdate = $('#retailerEmailId').val();
		var mobile = user.mobile;
        var retailerbtype = $('#retailerVehicleOptions').val();
        var retailerCompanyName = $('#retailerCompanyName').val();
        var retailerOwnerName = $('#retailerOwnerName').val();
        var retailerGstNo = $('#retailerGstNo').val();
		var retailerPanno = $('#retailerPanNo').val();
        var retailerPincode = $('#retailerPincode').val();
		var retailerState = $('#retailerState').val();
        var retailerCity = $('#retailerCity').val();
		var retailerLocation = $('#retailerLocation').val();
        var retailerWhereBuy = $('#retailerWhereBuy').val();
		// var email = $('#update_email').val();
		// var vehicleno = $('#update_vehicleno').val().toUpperCase();
		
		// var mm ='';
		// var dd ='';
		// var dd1 ='';
		// var yyyy = '';
		// var yyyy1 = '';

		var docimg = localStorage.getItem('docimg');

		var birthday = $('#dob_update').val();

		if(birthday!='')
		{
			var dob = birthday.split('-');
			mm = dob.length == 3 ? dob[1] : '';
			dd = dob.length == 3 ? dob[0] : '';
			dd1 = dob.length == 3 ? dob[0] : '';

			yyyy = dob.length == 3 ? dob[2] : '';
			yyyy1 = dob.length == 3 ? dob[2] : '';

           //$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
		
		}
		// if(dd.length==4)
		// {
		// 	yyyy=dd1;
		// 	dd=yyyy1;
		// }
		
	if(retailerPincode.trim()=='' || retailerCompanyName.trim()=='' || retailerOwnerName.trim()=='' || retailerGstNo.trim()=='' || retailerPanno.trim()=='')
	{
		toast('Please enter mandatory fields.');
	}
	else if(retailerbtype=='' || retailerbtype=='undefined' || retailerbtype=='null' || retailerbtype==null)
    {
	     toast('Please select business type');
		 $('#retailerVehicleOptions').focus();
         $('#retailerVehicleOptions').scrollIntoView();
    }
	else if(checkforundefined(docimg)=='')
    {
		  toast('Please upload PAN photo');
		  $('#kycdoc_photo').focus();
		  $('#kycdoc_photo').scrollIntoView();
	}
	else if(retailerState=='' || retailerState=='undefined' || retailerState=='null' || retailerState==null)
    {
	     toast('Please select state');
		 $('#retailerState').focus();
         $('#retailerState').scrollIntoView();
    }
	else if(retailerCity=='' || retailerCity=='undefined' || retailerCity=='null' || retailerCity==null)
    {
	     toast('Please select city');
		 $('#retailerCity').focus();
         $('#retailerCity').scrollIntoView();
    }
	else if(retailerLocation.trim()=='')
    {
	     toast('Please enter location');
    }
	/*else if(retailerWhereBuy=='' || retailerWhereBuy==undefined || retailerWhereBuy==null)
	{
		toast('Please check from where you buy');
	}*/
	else
	{
    
	 $.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				'FirstName': retailerCompanyName,
				'LastName': '',
				'deviceid': reg_id,
				'cname':'',
				'mobileno': user.mobile,
				'Emailid': emailUpdate,
				'dd': '',
				'mm': '',
				'yy': '',
                'deviceType': '',
				'doaday': '',
				'doamonth': '',
				'doayear': '',
				'FlatNo': '',
				'Pincode': retailerPincode,
				'State': retailerState,
				'City': retailerCity,
				'Location': retailerLocation,
				'DealerCode': 'HO-001',
				'PANNo': retailerPanno,
				'kyc_doc_photo': docimg,
				'GSTNo': retailerGstNo,
				'VehicleNo': '',
				'VehicleModel': '',
				'VehicleManufacturer': '',
			    'LastUsedEngineOil': '',
                'Business_Category_Type': retailerbtype,
				'Company_Shop_Name': retailerCompanyName,
				'Owner_Name': retailerOwnerName,
				'Member_Type': 'Retailer',
				'Where_Buy': retailerWhereBuy
				
			},
			success: function(data, textStatus, xhr) {

				
				localStorage.setItem("profiledone_idemitsu","Yes");
				
				if (data.indexOf("Success")>=0)
				{
						toast('Your profile has been updated successfully.');
						user.firstname=retailerCompanyName;
						//user.lastname=lastname;
						// user.emailid=email;

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
					

				
				if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
				{
					document.getElementById("profilenm").innerHTML= 'Guest';
					document.getElementById("profilenm1").innerHTML='Guest';
				}
				else
				{
					var fn='';
					var ln='';
					if(user.firstname != '')
					{
						fn = user.firstname.substring(0, 1);
					}
					if(user.lastname != '')
					{
						ln = user.lastname.substring(0, 1);
					}
					if(user.id != '')
					{
						var id1 = user.id.substring(0, 4);
						var id2 = user.id.substring(4, 8);
						var id3 = user.id.substring(8, 10);
					}

					document.getElementById("sortname").innerHTML= fn+''+ln;
					document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts").innerHTML=user.balance;
					document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts1").innerHTML=user.balance;
					//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
					document.getElementById("pr_valid").innerHTML=user.validity;

					//document.getElementById("firm_nm").innerHTML= user.proprietorname;
					//document.getElementById("sap_code").innerHTML= user.sapcode;
						
				}
					
				$.mobile.changePage( "#homepage", {transition: "flip"} );
		         
				
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
  }
		
}

function updateMechanic()
{
		var firstname = $('#machanicFirstName').val();
		//var lastname = $('#machanicLastName').val();
		var emailUpdate = $('#machanicEmailId').val();
		// var email = $('#update_email').val();
		// var vehicleno = $('#update_vehicleno').val().toUpperCase();
		
        var machanicbtype = $('#machanicVehicleOptions').val();
		var machanicPincode = $('#machanicPincode').val();
        var machanicState = $('#machanicState').val();
		var machanicCity = $('#machanicCity').val();
		var machanicLocation = $('#machanicLocation').val();
        //var machanicDistributor = $('#machanicDistributor').val();
		var machanicDistributor = 'HO-001';
		// var mm ='';
		// var dd ='';
		// var dd1 ='';
		// var yyyy = '';
		// var yyyy1 = '';

		//var birthday = $('#dob_update').val();

		/*if(birthday!='')
		{
			var dob = birthday.split('-');
			mm = dob.length == 3 ? dob[1] : '';
			dd = dob.length == 3 ? dob[0] : '';
			dd1 = dob.length == 3 ? dob[0] : '';

			yyyy = dob.length == 3 ? dob[2] : '';
			yyyy1 = dob.length == 3 ? dob[2] : '';

           $('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
		
		}*/
		// if(dd.length==4)
		// {
		// 	yyyy=dd1;
		// 	dd=yyyy1;
		// }
		
    if(firstname.trim()=='' || machanicPincode.trim()=='')
	{
		toast('Please enter mandatory fields.');
	}
	else if(machanicbtype=='' || machanicbtype=='undefined' || machanicbtype=='null' || machanicbtype==null)
    {
	     toast('Please select mechanic category');
		 $('#machanicVehicleOptions').focus();
         $('#machanicVehicleOptions').scrollIntoView();
    }
	else if(machanicState=='' || machanicState=='undefined' || machanicState=='null' || machanicState==null)
    {
	     toast('Please select state');
		 $('#machanicState').focus();
         $('#machanicState').scrollIntoView();
    }
	else if(machanicCity=='' || machanicCity=='undefined' || machanicCity=='null' || machanicCity==null)
    {
	     toast('Please select city');
		 $('#machanicCity').focus();
         $('#machanicCity').scrollIntoView();
    }
	else if(machanicLocation.trim()=='')
    {
	     toast('Please enter location');
    }
	/*else if(machanicDistributor=='' || machanicDistributor==undefined || machanicDistributor==null)
	{
		toast('Please check distributor');
	}*/
	else
	{
    
	 $.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				'FirstName': firstname,
				'LastName': '',
				'deviceid': reg_id,
				'cname':'',
				'mobileno': user.mobile,
				'Emailid': emailUpdate,
				'dd': '',
				'mm': '',
				'yy': '',
                'deviceType': '',
				'doaday': '',
				'doamonth': '',
				'doayear': '',
				'FlatNo': '',
				'Pincode': machanicPincode,
				'State': machanicState,
				'City': machanicCity,
				'Location': machanicLocation,
				'DealerCode': machanicDistributor,
				'PANNo': '',
				'GSTNo': '',
				'VehicleNo': '',
				'VehicleModel': '',
				'VehicleManufacturer': '',
			    'LastUsedEngineOil': '',
				'Business_Category_Type': machanicbtype,
				'Company_Shop_Name': '',
				'Owner_Name': '',
				'Member_Type': 'Mechanic'
				
			},
			success: function(data, textStatus, xhr) {

				
				localStorage.setItem("profiledone_idemitsu","Yes");
				
				if (data.indexOf("Success")>=0)
				{
						toast('Your profile has been updated successfully.');
						user.firstname=firstname;
						//user.lastname=lastname;
						// user.emailid=email;

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
					

				
				if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
				{
					document.getElementById("profilenm").innerHTML= 'Guest';
					document.getElementById("profilenm1").innerHTML='Guest';
				}
				else
				{
					var fn='';
					var ln='';
					if(user.firstname != '')
					{
						fn = user.firstname.substring(0, 1);
					}
					if(user.lastname != '')
					{
						ln = user.lastname.substring(0, 1);
					}
					if(user.id != '')
					{
						var id1 = user.id.substring(0, 4);
						var id2 = user.id.substring(4, 8);
						var id3 = user.id.substring(8, 10);
					}

					document.getElementById("sortname").innerHTML= fn+''+ln;
					document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts").innerHTML=user.balance;
					document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts1").innerHTML=user.balance;
					//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
					document.getElementById("pr_valid").innerHTML=user.validity;

					//document.getElementById("firm_nm").innerHTML= user.proprietorname;
					//document.getElementById("sap_code").innerHTML= user.sapcode;
						
				}
					
				$.mobile.changePage( "#homepage", {transition: "flip"} );
		         
				
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
  }
		
}

function updateConsumer()
{
		var firstname = $('#consumerFirstName').val();
		//var lastname = $('#consumerLastName').val();
		var emailUpdate = $('#consumerEmailId').val();
        var consumerCity = $('#consumerCity').val();
        var consumerState = $('#consumerState').val();
        var consumerPincode = $('#consumerPincode').val();
		var consumerLocation = $('#consumerLocation').val();
        var consumerVehicleMGF = $('#consumerVehicleMGF').val();
        var consumerVehicleModel = $('#consumerVehicleModel').val();
        var consumerLUEO = $('#consumerLUEO').val();
		// var email = $('#update_email').val();
		// var vehicleno = $('#update_vehicleno').val().toUpperCase();
		
		// var mm ='';
		// var dd ='';
		// var dd1 ='';
		// var yyyy = '';
		// var yyyy1 = '';

		/*var birthday = $('#dob_update').val();

		if(birthday!='')
		{
			var dob = birthday.split('-');
			mm = dob.length == 3 ? dob[1] : '';
			dd = dob.length == 3 ? dob[0] : '';
			dd1 = dob.length == 3 ? dob[0] : '';

			yyyy = dob.length == 3 ? dob[2] : '';
			yyyy1 = dob.length == 3 ? dob[2] : '';

           //$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
		
		}*/
		// if(dd.length==4)
		// {
		// 	yyyy=dd1;
		// 	dd=yyyy1;
		// }
		
    if(firstname.trim()=='' || consumerPincode.trim()=='')
	{
		toast('Please enter mandatory fields.');
	}
	else if(consumerState=='' || consumerState=='undefined' || consumerState=='null' || consumerState==null)
    {
	     toast('Please select state');
		 $('#consumerState').focus();
         $('#consumerState').scrollIntoView();
    }
	else if(consumerCity=='' || consumerCity=='undefined' || consumerCity=='null' || consumerCity==null)
    {
	     toast('Please select city');
		 $('#consumerCity').focus();
         $('#consumerCity').scrollIntoView();
    }
	else
	{
    
	 $.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				'FirstName': firstname,
				'LastName': '',
				'deviceid': reg_id,
				'cname':'',
				'mobileno': user.mobile,
				'Emailid': emailUpdate,
				'dd': '',
				'mm': '',
				'yy': '',
                'deviceType': '',
				'doaday': '',
				'doamonth': '',
				'doayear': '',
				'FlatNo': '',
				'Pincode': consumerPincode,
				'State': consumerState,
				'City': consumerCity,
				'Location': consumerLocation,
				'DealerCode': 'HO-001',
				'PANNo': '',
				'GSTNo': '',
				'VehicleNo': '',
				'VehicleModel': consumerVehicleModel,
				'VehicleManufacturer': consumerVehicleMGF,
			    'LastUsedEngineOil': consumerLUEO,
                'Business_Category_Type': '',
				'Company_Shop_Name': '',
				'Owner_Name': '',
				'Member_Type': 'Consumer'
				
			},
			success: function(data, textStatus, xhr) {

				
				localStorage.setItem("profiledone_idemitsu","Yes");
				
				if (data.indexOf("Success")>=0)
				{
						toast('Your profile has been updated successfully.');
						user.firstname=firstname;
						//user.lastname=lastname;
						// user.emailid=email;

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
					

				
				if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
				{
					document.getElementById("profilenm").innerHTML= 'Guest';
					document.getElementById("profilenm1").innerHTML='Guest';
				}
				else
				{
					var fn='';
					var ln='';
					if(user.firstname != '')
					{
						fn = user.firstname.substring(0, 1);
					}
					if(user.lastname != '')
					{
						ln = user.lastname.substring(0, 1);
					}
					if(user.id != '')
					{
						var id1 = user.id.substring(0, 4);
						var id2 = user.id.substring(4, 8);
						var id3 = user.id.substring(8, 10);
					}

					document.getElementById("sortname").innerHTML= fn+''+ln;
					document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts").innerHTML=user.balance;
					document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts1").innerHTML=user.balance;
					//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
					document.getElementById("pr_valid").innerHTML=user.validity;

					//document.getElementById("firm_nm").innerHTML= user.proprietorname;
					//document.getElementById("sap_code").innerHTML= user.sapcode;
						
				}
					
				$.mobile.changePage( "#homepage", {transition: "flip"} );
		         
				
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
  }
		
}

function loadState_list()
{
    
	$.getJSON(
            GSERVER2+'Get_allstate_json_api.asp',
			{

			}, 
		    function (json) {

				 //localStorage.setItem("agappestatejson", JSON.stringify(json));

				 var listItems= "";
				     listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E;color:#000000;' selected='selected'>-State-</option>";
				     for (var i = 0; i < json.data.length; i++)
					 {
						listItems+= "<option value='" + json.data[i].stateid + "'>" + json.data[i].statename.trim() + "</option>";
					 }
				
				     $("#workshopState").html(listItems);
					 $("#retailerState").html(listItems);
					 $("#machanicState").html(listItems);
					 $("#consumerState").html(listItems);
					 $("#distributorState").html(listItems);

					 //$("#workshopState").val(user.state);
				
	 
	 }).error(function () {  console.log("err in loading state list..") });
}
function checkgst_wrt_pan(str1,str2)
{

  var unino = $('#'+str1).val().toUpperCase();
  var pan   = $('#'+str2).val().toUpperCase();

  var res = unino.substr(2, 10);
  if(pan!=res)
  {
		toast("Wrong GSTIN Number...!");
		$('#'+str1).val('');
		return (false);
  }
  else
  {
		toast("GST Number is matched.");
		return(true);
  }
}

function checkgst(str,str2)
{
	var str1 = $('#'+str).val().toUpperCase();

	if(str1.trim()!='')
	{
		var regpan = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
		if(regpan.test(str1))
		{
			//checkproofvalidity('GST',str);
			//return(true);
			checkgst_wrt_pan(str,str2);
		}
		else
		{

			$('#'+str).val('');
			toast('Invalid GSTIN');
			return (false);
		}
	}
}

function checkpan(str)
{
	var str1 = $('#'+str).val();

	if(str1.trim()!='')
	{
		var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
		if(regpan.test(str1))
		{
			//checkproofvalidity('PAN',str);
			return(true);
		}
		toast('Invalid Pan No');
		$('#'+str).val('');
		return (false);
	}
}

function fetchCitylist_1(stateid)
{
		
  $.ajax({
    url: SERVER +'city_locator_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'stateid': stateid},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
   
        var listItems= "";
		    listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E' selected='selected'>-City-</option>";

		for (var i = 0; i < data.data.length; i++)
		{
			
			if(data.data[i].cityid == user.city)
			    listItems+= "<option value='" + data.data[i].cityid + "' selected>" + data.data[i].cityname + "</option>";
			else
				listItems+= "<option value='" + data.data[i].cityid + "'>" + data.data[i].cityname + "</option>";
			
		}

		   $("#distributorCity").html(listItems);
		   $("#workshopCity").html(listItems);
		   $("#retailerCity").html(listItems);
		   $("#machanicCity").html(listItems);
		   $("#consumerCity").html(listItems);

    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });

}

function getdetailsPincode(str1,str2,str3,str4)
{
    var pincode =  $('#'+str1).val();
	if(pincode.length>5)
	{
	$.ajax({
		url: 'https://api.postalpincode.in/pincode/'+pincode,
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {},
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		    console.log(JSON.stringify(data));
			console.log(data[0].Status);

            if(data[0].Status=='Success')
		    {
				$('#'+str4).val(data[0].PostOffice[0].Block);
				//$('#update_city').val(data[0].PostOffice[0].District);
				//$('#update_state').val(data[0].PostOffice[0].State);

				var selectedText = data[0].PostOffice[0].State;
				// Now set dropdown selected option to 'State'.
				
				var strstate = '#'+str2+' option';
				//console.log(strstate);

               //$('#workshopState option').map(function () {
				$(strstate).map(function () {
					if ($(this).text() == selectedText) return this;
				}).prop('selected', 'selected');

				//showCityList();
				//showCityList_new(str1,str2,str3,str4,data[0].PostOffice[0].Block);

				var listItems= "";
				 listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E' selected='selected'>-City-</option>";

				 for (var i = 0; i < data[0].PostOffice.length; i++)
				 {
						if(data[0].PostOffice[i].Name == user.city)
							listItems+= "<option value='" + data[0].PostOffice[i].Name + "' selected>" + data[0].PostOffice[i].Name +"</option>";
						else
							listItems+= "<option value='" + data[0].PostOffice[i].Name + "'>" + data[0].PostOffice[i].Name +"</option>";
				 }
				  
				 $("#"+str3).html(listItems);
		    }
			
		},
		error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
	}
	  else{
		toast('Please enter valid Pincode');
		$('#'+str1).val('');
	  }
}

function showCityList_new(str1,str2,str3,str4,mycity)
{

  var stateid = $('#'+str2).val();

  $.ajax({
    url: SERVER +'city_locator_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {
		'stateid' : stateid
      },
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   console.log(data)
   
        var listItems= "";
		    listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E' selected='selected'>-City-</option>";

		for (var i = 0; i < data.data.length; i++)
		{
			    if(data.data[i].cityid == user.city)
					listItems+= "<option value='" + data.data[i].cityid + "' selected>" + data.data[i].cityname + "</option>";
				else
				    listItems+= "<option value='" + data.data[i].cityid + "'>" + data.data[i].cityname + "</option>";
		}

				  
				  $("#"+str3).html(listItems);

				  var strcity = '#'+str3+' option';

				  $(strcity).map(function () {
					if ($(this).text() == mycity) return this;
				  }).prop('selected', 'selected');
		
				  /*$("#city_registration").selectmenu('refresh');*/
			
      },
      error: function(xhr, textStatus, errorThrown) {
    }
  });
}

function showCityList(str1,str2)
{

  var stateid = $('#'+str1).val();

  $.ajax({
    url: SERVER +'city_locator_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {
		'stateid' : stateid
      },
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   console.log(data)
   
        var listItems= "";
		    listItems+= "<option value=''  disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>-City-</option>";

		for (var i = 0; i < data.data.length; i++)
		{
			
				listItems+= "<option value='" + data.data[i].cityid + "'>" + data.data[i].cityname + "</option>";
		}
				  $("#"+str2).html(listItems);
			
      },
      error: function(xhr, textStatus, errorThrown) {
    }
  });
}

function load_dealerlist_forinfluencer()
{

  var cityid='';
  $.ajax({
    url: SERVER+'store_locator_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'city': cityid},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
  
   //called when successful
   
        var listItems= "";
			listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E;color:#000000;' selected='selected'>-Select Distributor-</option>";
            for (var i = 0; i < data.length; i++)
			{
				if(data[i].storename.indexOf('Email Admin')==0 || data[i].storename.indexOf('Paytm App Store')==0 || data[i].storename.indexOf('ShortCode')==0 || data[i].storename.indexOf('Mobile App')==0 || data[i].storename.indexOf('Paytm Store')==0|| data[i].storename.indexOf('MicroSite')==0 || data[i].storename.indexOf('ONLINE')==0 || data[i].storename.indexOf('Test')>=0)
				continue;

                listItems+= "<option value='" + data[i].storecode + "'>" + data[i].storename + "</option>";
            }
      
            //$("#workshopWhereBuy").html(listItems);
			//$("#retailerWhereBuy").html(listItems);
			//$("#machanicDistributor").html(listItems);
			//$("#consumerDistributor").html(listItems);

			//$('#workshopWhereBuy').val(user.store_code_idemitsu);
			//$('#retailerWhereBuy').val(user.store_code_idemitsu);
			//$('#machanicDistributor').val(user.store_code_idemitsu);
			//$('#consumerDistributor').val(user.store_code_idemitsu);
   
    },
    error: function(xhr, textStatus, errorThrown) {
		// $('#login-msg').html('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
	 
}

function footerProfilePage()
{
	    if(localStorage.getItem("categorySelected")=='Distributor')
		{
			if(user.gst_no.trim()!='')
			{
				document.getElementById('distributorGstNo').readOnly = true;
			}
			if(user.pan_no.trim()!='')
			{
				document.getElementById('distributorPanNo').readOnly = true;
			}
			if(user.distown_code.trim()!='')
			{
				document.getElementById('distributorCode').readOnly = true;
			}

			$.mobile.changePage( "#page-form-distributor", { transition: "flip"} );
		}
		else if(localStorage.getItem("categorySelected")=='Workshop')
		{
			if(user.gst_no.trim()!='')
			{
				document.getElementById('workshopGstNo').readOnly = true;
			}
			if(user.pan_no.trim()!='')
			{
				document.getElementById('workshopPanNo').readOnly = true;
			}

			$.mobile.changePage( "#page-form-workshop", { transition: "flip"} );
		}
		else if(localStorage.getItem("categorySelected")=='Retailer')
		{
			if(user.gst_no.trim()!='')
			{
				document.getElementById('retailerGstNo').readOnly = true;
			}
			if(user.pan_no.trim()!='')
			{
				document.getElementById('retailerPanNo').readOnly = true;
			}

			$.mobile.changePage( "#page-form-retailer", { transition: "flip"} );
		}
		else if(localStorage.getItem("categorySelected")=='Mechanic')
		{
			$.mobile.changePage( "#page-form-machanic", { transition: "flip"} );
		}
		else if(localStorage.getItem("categorySelected")=='Consumer')
		{
			$.mobile.changePage( "#page-form-consumer", { transition: "flip"} );
		}
		else
		{
			toast("Category does't selected");
		}
}

function dealerauthenticate()
{


 var uname = $('#dealerusername').val();
 var pwd = $('#dealerpassword').val();
 //var pwd = $('#dealercodeBox1').val()+$('#dealercodeBox2').val()+$('#dealercodeBox3').val()+$('#dealercodeBox4').val();

 if(uname=='' || pwd==''){
  toast('Please enter Username/password');
 }else
{
  

 $.ajax({
   url: SERVER2+'forgot_pswd_dealer_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','Status_flag': '1', 'login_name': uname , 'user_pwd': pwd},
	complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {

     console.log('data'+JSON.stringify(data));

	    if(data.error.length>0)
		{
			toast('Authentication failed');

			localStorage.removeItem('usernamemloyal_idemitsu');
			localStorage.removeItem('userpassloyal_idemitsu');
			
			$('#dealerusername').val('');
			$('#dealerpassword').val('');

		}	
		else
		{
			//toast(data.data);

			store.store_id = checkforundefined(data.data[0].storeid);
			store.store_code = checkforundefined(data.data[0].storecode);
			store.store_name = checkforundefined(data.data[0].storename);
			store.storemobile =  checkforundefined(data.data[0].storemobile);
			store.store_email = checkforundefined(data.data[0].storeemail);
			store.city = checkforundefined(data.data[0].storecity);
			store.pincode = checkforundefined(data.data[0].storepincode);
			store.totalinfluencer = checkforundefined(data.data[0].TotalInfluencer);
			store.totalpoint = checkforundefined(data.data[0].TotalPoint);

			store.store_firm_name = checkforundefined(data.data[0].dealerfirmname);
			store.address = checkforundefined(data.data[0].storeaddress);
			store.pancardno = checkforundefined(data.data[0].panno);
			store.profile_photo = checkforundefined(data.data[0].dealerPhoto);
			store.vcard_photo = checkforundefined(data.data[0].firmnamevisitcardphoto);
			store.doc_photo = checkforundefined(data.data[0].pancardphoto);

			//document.getElementById("user_id").innerHTML='SE Code '+store.store_id;
    		document.getElementById("user_id1_dealer").innerHTML= store.store_code;
			document.getElementById("profilenm_dealer").innerHTML= store.store_name;
			document.getElementById("profilenm1_dealer").innerHTML= store.store_name;
			document.getElementById("profilepts_dealer").innerHTML= store.totalpoint;


			if(store.store_name != ''){
							var fn = store.store_name.substring(0, 1);
						}

			document.getElementById("sortname_dealer").innerHTML= fn;

			localStorage.setItem('usernamemloyal_idemitsu',uname);
			localStorage.setItem('userpassloyal_idemitsu',pwd);

			localStorage.setItem('store_id',store.store_id);
            localStorage.setItem('store_code',store.store_code);
			localStorage.setItem('store_name',store.store_name);

			$.mobile.changePage( "#dealerhomepage", { transition: "none"} );


		}
    
    },
    error: function(xhr, textStatus, errorThrown) {
		
		//toast('dealer auth:Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
  
 }
}

function gotoScanpage2()
{
	$.mobile.changePage( "#scanPage", { transition: "none"} );
}

function submit_scanResult(cpncode)
{

	 $.ajax({
		   url: SERVERCPACTION,
		   type: 'POST',
		   timeout: 50000,
		   dataType: 'json',
		   headers: {
			"Content-Type": "application/json"
		   },
		   data:JSON.stringify({
					"mobileno": user.mobile,
					"type": "0",
					"cpncode": cpncode
			}),
		   complete: function(xhr, textStatus) {
		   //called when complete
			},
			success: function(data, textStatus, xhr) {

				 console.log('JSONDATA:'+JSON.stringify(data));

				 if(data.success=='1')
				 {
					  if(data.data.GET_PROMOTIONAL_COUPON_VALIDATION_INFOResult.Success === true)
					  {
						   burnCoupon(cpncode);
					  }
					  else
					  {
						  toast_p(data.data.GET_PROMOTIONAL_COUPON_VALIDATION_INFOResult.message);
						  //document.getElementById("qr_scan_error_popup_div").innerHTML= data.data.GET_PROMOTIONAL_COUPON_VALIDATION_INFOResult.message;
						  //$('#qr_scan_error_popup').popup();
						  //$('#qr_scan_error_popup').popup("open");
						  $.mobile.changePage( "#homepage", {transition: "none"} );
					  }
				 }
				 else
				 {
					 toast_p('No suceess response found..');
					 $.mobile.changePage( "#homepage", {transition: "none"} );
				 }
		   
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
			}
		  });
}

function burnCoupon(cpncode)
{

 $.ajax({
   url: SERVERCPACTION,
   type: 'POST',
   timeout: 50000,
   dataType: 'json',
   headers: {
    "Content-Type": "application/json"
  },
   data:JSON.stringify({
			"mobileno": user.mobile,
			"type": "1",
			"cpncode": cpncode
	}),
   complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {

		 console.log('JSONDATA'+JSON.stringify(data));
        
		 if(data.success=='1')
		 {
			  if(data.data.GET_PROMOTIONAL_COUPON_VALIDATION_INFOResult.Success === true)
			  {
				   var cpnvalue = data.data.GET_PROMOTIONAL_COUPON_VALIDATION_INFOResult.output.coupon_value;
				   //var dealcode = data.data.GET_PROMOTIONAL_COUPON_VALIDATION_INFOResult.output.deal_code;
				   //console.log('cpnvalue:'+cpnvalue);
				   //sendGratification(cpnvalue);
				   earn_points_final(cpnvalue,cpncode);
			  }
			  else
			  {
				    toast(data.data.GET_PROMOTIONAL_COUPON_VALIDATION_INFOResult.message);
					$.mobile.changePage( "#homepage", {transition: "none"} );
			  }
		 }
		 else
		 {
			 toast_p('No response found..');
			 $.mobile.changePage( "#homepage", {transition: "none"} );
		 }
		 
   
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
 
}

function earn_points_final(cpnvalue,cpncode)
{
	  //var refbillno = 'idemitsu_'+Math.floor((Math.random() * 1000000000) + 1);
	  var lat = checkforundefined($('#scanpage_latitude').val());
	  var longt = checkforundefined($('#scanpage_longitude').val());


	  var today = new Date();
		
			var dd = today.getDate();
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

	  today = yyyy+'-'+mm+'-'+dd;

	  $.ajax({
			url: SERVER2+"earn_points_json_api.asp",
		    type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		    data:{
			  "apiuid": 'MLOYALAPI',
			  "apipswd": 'Ml0yalAP!2o14',
			  "mobileno": user.mobile,
			  "bill_number": cpncode,
			  "bill_amount": cpnvalue,
			  "period": 'normal',
			  "scode": user.store_code_idemitsu,
			  "bill_date": today,
			  "lat": lat,
			  "log": longt
            },
		    beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
				xhr.setRequestHeader('apiuid', 'MLOYALAPI');
				xhr.setRequestHeader('apipswd', 'Ml0yalAP!2o14');
            },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			success: function(data, textStatus, xhr) {
			 
			    console.log("data:"+JSON.stringify(data));

			    if(data.error.length>=1)
				{
					toast_p(data.error);
				}
				else
				{
					toast_p(data.data);
					//$.mobile.changePage( "#homepage", { transition: "none"} );

					/*document.getElementById("filter_panel_div").innerHTML= data.data;
					$.mobile.changePage( "#homepage", { transition: "none"} );
					$(".overlay").fadeIn("fast");
					$("#filter_panel").slideToggle("fast");*/

					$('#username_new').val(localStorage.getItem("usernameidemitsu"));
					var pass = localStorage.getItem("passwordidemitsu");
		
					if(pass.length>=4)
					{
								var i=4;
								while(i>0)
								{
									$('#codeBox'+i).val(parseInt(pass%10));
									i--;
									pass = parseInt(pass/10);
														
								}
				   }
		
					setTimeout( function() {
						  authenticate_new();
					}, 1000);  //1 seconds
			   
				}
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+textStatus);
			}
		});
}

function capturePhoto_kycdoc()
{
	navigator.camera.getPicture(uploadPhoto_kycdoc, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
}

function capturePhoto_kycdoc2()
{
	navigator.camera.getPicture(uploadPhoto_kycdoc2, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
}

function capturePhoto_kycdoc3()
{
	navigator.camera.getPicture(uploadPhoto_kycdoc3, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
}

function uploadPhoto_kycdoc(imageURI) 
{

				
				var b_Image = document.getElementById('kycdoc_photo');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='doc_'+user.mobile;

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//shop_img = options.fileName+".jpg";

				doc_img="https://taghash.co/idemitsu/uploads/"+options.fileName+".jpg";


				localStorage.setItem('docimg',doc_img);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

						 var statusDom;
						 var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				statusDom=document.getElementById("kycdoc_photo_status");
				statusDomdiv=document.getElementById("kycdoc_photo_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 //if(perc=='100')
       						 	//localStorage.setItem('bill_img',filenmbill);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};


				ft.upload(imageURI, encodeURI("https://taghash.co/idemitsu/upload_photo_new1.php"), win, failPhoto_kycdoc, options, true);
}

function failPhoto_kycdoc(error)
{
			toast('Photo upload failed. Please try after sometime: ' + error.code);
			localStorage.removeItem('docimg');
			doc_img = '';
			document.getElementById('kycdoc_photo').src = "assets/images/camera_icon.png";
}

function uploadPhoto_kycdoc2(imageURI) 
{

				
				var b_Image = document.getElementById('kycdoc_photo2');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='doc_'+user.mobile;

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//shop_img = options.fileName+".jpg";

				doc_img="https://taghash.co/idemitsu/uploads/"+options.fileName+".jpg";


				localStorage.setItem('docimg',doc_img);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

						 var statusDom;
						 var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				statusDom=document.getElementById("kycdoc_photo_status2");
				statusDomdiv=document.getElementById("kycdoc_photo_status_div2");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 //if(perc=='100')
       						 	//localStorage.setItem('bill_img',filenmbill);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};


				ft.upload(imageURI, encodeURI("https://taghash.co/idemitsu/upload_photo_new1.php"), win, failPhoto_kycdoc2, options, true);
}

function failPhoto_kycdoc2(error)
{
			toast('Photo upload failed. Please try after sometime: ' + error.code);
			localStorage.removeItem('docimg');
			doc_img = '';
			document.getElementById('kycdoc_photo2').src = "assets/images/camera_icon.png";
}

function win(r) {
				toast("Photo uploaded successfully!");
				//$("#wait").css("display","none"); // hide it initially
				 
			}

function uploadPhoto_kycdoc3(imageURI) 
{

				
				var b_Image = document.getElementById('kycdoc_photo3');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='doc_'+user.mobile;

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//shop_img = options.fileName+".jpg";

				doc_img="https://taghash.co/idemitsu/uploads/"+options.fileName+".jpg";


				localStorage.setItem('docimg',doc_img);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

						 var statusDom;
						 var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				statusDom=document.getElementById("kycdoc_photo_status3");
				statusDomdiv=document.getElementById("kycdoc_photo_status_div3");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 //if(perc=='100')
       						 	//localStorage.setItem('bill_img',filenmbill);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};


				ft.upload(imageURI, encodeURI("https://taghash.co/idemitsu/upload_photo_new1.php"), win, failPhoto_kycdoc3, options, true);
}

function failPhoto_kycdoc3(error)
{
			toast('Photo upload failed. Please try after sometime: ' + error.code);
			localStorage.removeItem('docimg');
			doc_img = '';
			document.getElementById('kycdoc_photo3').src = "assets/images/camera_icon.png";
}

function fetchcurrent_Location_scan()
{
        try{
		cordova.plugins.locationAccuracy.request(
          function() {
            console.log("testhigh success");
            setTimeout(function() {
              getPosition_new();
            }, 1500);
          },
          function() {
            //toast("error");
          },
          cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY
        );
		 }
		 catch(e)
		 {

		  navigator.geolocation.getCurrentPosition(geolocationSuccess_new,geolocationError_new);

		 }
}
function getPosition_new() 
{
         navigator.geolocation.getCurrentPosition(geolocationSuccess_new,geolocationError_new);
}
function geolocationSuccess_new(position)
{
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
       
		console.log('latlng:'+ position.coords.latitude+','+position.coords.longitude);

		$('#scanpage_latitude').val(lat);
		$('#scanpage_longitude').val(lng);
								
}
function geolocationError_new(error) 
{
        //toast('unable to trace');
}

function onlineTraining(str)
{

  $.ajax({
	url: SERVER+'online_training.asp',
	type: 'GET',
	timeout: 50000,
	dataType: 'json',
	data: {'mno': user.mobile, 'statustype': str },
	complete: function(xhr, textStatus) {
	},
	success: function(data, textStatus, xhr) {

		
		//$.mobile.changePage( "#homepage", {transition: "none"} );

	},
	error: function(xhr, textStatus, errorThrown) {
		 toast('Could not connect to Server, make sure you are connected to Internet');
	}
  });

}

// download statement

function CreatePDFfromHTML4() 
{

	var fileName = "idemitsu_statement.pdf";
		
	var options = {
		documentSize: 'A4',
		type: 'base64'                
	};

	var x = document.getElementsByClassName("html-content4");
	var y = x[0].innerHTML;
		
		var str ='';
			str +='<html><div>';
			str +='<div class="login_logo_center"><img src="https://taghash.co/idemitsu/logo_home.png" alt="IDEMITSU"></div>';
			str += y;
			str +='</div></html>';

			
	pdf.fromData(str , options)
		.then(function(base64){               
			// To define the type of the Blob
			var contentType = "application/pdf";
				
			// if cordova.file is not available use instead :
			var folderpath = "file:///storage/emulated/0/Download/";
			//var folderpath = cordova.file.externalRootDirectory + "Download/"; //you can select other folders
			savebase64AsPDF(folderpath, fileName, base64, contentType);          
		})  
		.catch((err)=>console.err(err));

}

function savebase64AsPDF(folderpath,filename,content,contentType){
    // Convert the base64 string in a Blob
    var DataBlob = b64toBlob(content,contentType);
    
    console.log("Starting to write the file :3");
    
    window.resolveLocalFileSystemURL(folderpath, function(dir) {
        console.log("Access to the directory granted succesfully");
        dir.getFile(filename, {create:true}, function(file) {
            toast("Statement downloaded succesfully.");
			//show_download_popup();
            file.createWriter(function(fileWriter) {
                console.log("Writing content to file");
                fileWriter.write(DataBlob);
            }, function(){
                toast('Unable to save file in path '+ folderpath);
            });
        },function(error){});
    });
}

function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

      var blob = new Blob(byteArrays, {type: contentType});
      return blob;
}

function show_download_popup()
{
	$('#download_stat_pop').popup();
	$('#download_stat_pop').popup("open");
}

function gobackfrom_downloadpage()
{
	$.mobile.changePage( "#homepage", { transition: "none"} );	
}

function openPDFnew()
{
	//var url ="file:///storage/emulated/0/Download/idemitsu_statement.pdf";
    //var ref = window.open(url, '_system', 'location=yes');

	cordova.plugins.fileOpener2.open(
    'file:///storage/emulated/0/Download/idemitsu_statement.pdf',
    'application/pdf',
    {
        error : function(e) {
            console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
			//alert('Error status: ' + e.status + ' - Error message: ' + e.message);
        },
        success : function () {
            console.log('file opened successfully');
			//alert('file opened successfully');
        }
    }
);

}

function refer()
{
  
  console.log(user.mobile +" "+ user.firstname);
  var referral_mobile = user.mobile;
  //var referral_name =  user.firstname;

  //var rtype = $('#rtype').val();

  var referred_mobile1 = $('#rmobile1').val();
  //var referred_name1 =  $('#rname1').val();
  /*var referred_mobile2 = $('#rmobile2').val();
  var referred_name2 =  $('#rname2').val();*/
 

  if(referred_mobile1=='')
  {
		toast('Please enter referred details');
  }
  else if(referred_mobile1.length!=10)
  {
		toast('Please enter valid mobile no.');
  }
  else
  {
		
    $.ajax({
     url: SERVER2+'refer_json_api.asp',
     type: 'GET',
     timeout: 50000,
     dataType: 'html',
     data: {
    
				'apiuid': 'MLOYALAPI',   
				'apipswd': 'Ml0yalAP!2o14',     
				'mobileno': referral_mobile, 
				'referredmobileno': referred_mobile1
				/*'referred_name1': referred_name1,
				'referred_mobile2': referred_mobile2,        
				'referred_name2': referred_name2        
				'referred_mobile3': referred_mobile3,
				'referred_name3': referred_name3,
				'referred_mobile4': referred_mobile4,
				'referred_name4': referred_name4,
				'referred_mobile5': referred_mobile5,
				'referred_name5': referred_name5*/
				
			},
   
    success: function(data, textStatus, xhr) {

				console.log('JSONDATA:'+JSON.stringify(data));
				data=JSON.parse(data);

				if(data.error.length>0)
				{
					toast_p(data.error);
				}
				else
				{
					toast_p(data.data);

					$.mobile.changePage( "#homepage", { transition: "none"} );
					referReset();
				}

    },
    error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 }

}

function referReset()
{
				
	$('#rmobile1').val('');

}

function openTax_doc()
{
	 var ref = window.open('https://ilindia.idemitsu.com/', '_system', 'location=yes');
	 ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
     ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
     ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
     ref.addEventListener('exit', function(event) { alert(event.type); });
}



// *************************Changes 29 NOV 2022 Amit Rawat*************************
$(document).on("pageshow", "#otp_pg", function(){
	
	$('#codeBox1').val('');
	$('#codeBox2').val('');
	$('#codeBox3').val('');
	$('#codeBox4').val('');

});
function checkemail(str)
{ 
	var email = $('#'+str).val();
   var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(!regex.test(email))
   {
       toast('Please enter valid email id');
	   $('#'+str).val('');
    }
 }
//  function checkpincode(str)
// { 
// 	var pincode = $('#'+str).val();
//    var regex=/^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$/;
//    if(!regex.test(pincode))
//    {
//        toast('Please enter valid Pincode');
// 	   $('#'+str).val('');
//     }
//  }

function showPan_popup()
{

	$('#panCard_popup').popup();
    $('#panCard_popup').popup("open");
}

function closePan_Popup()
{
	$('#panCard_popup').popup("close");
}


function twoWeeler(imgurl)
{
	document.getElementById("imagePopup_id").src= imgurl;
	$('#imagePopup').popup();
	$('#imagePopup').popup("open");
	
}
function close_Popup_twoWeeler()
{
	$('#imagePopup').popup("close");
}

function fourWeeler(imgurl)
{
	document.getElementById("imagePopupfour_id").src= imgurl;
	$('#imagePopup_four').popup();
	$('#imagePopup_four').popup("open");
	
}
function close_Popup_four()
{
	$('#imagePopup_four').popup("close");
}


function fetchCitylist_1_new(stateid,pincodeid,cityid)
{

   var pincode =  $('#'+pincodeid).val();

	$.ajax({
		url: 'https://api.postalpincode.in/pincode/'+pincode,
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {},
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		    console.log(JSON.stringify(data));
			console.log(data[0].Status);

			var listItems = '';

            if(data[0].Status=='Success')
		    {


				 var listItems= "";
				 listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E' selected='selected'>-City-</option>";

				 for (var i = 0; i < data[0].PostOffice.length; i++)
				 {
						if(data[0].PostOffice[i].Name == user.city)
							listItems+= "<option value='" + data[0].PostOffice[i].Name + "' selected>" + data[0].PostOffice[i].Name +"</option>";
						else
							listItems+= "<option value='" + data[0].PostOffice[i].Name + "'>" + data[0].PostOffice[i].Name +"</option>";
				 }
				  
				 $("#"+cityid).html(listItems);

				  /*var strcity = '#'+str3+' option';
				  $(strcity).map(function () {
					if ($(this).text() == mycity) return this;
				  }).prop('selected', 'selected');*/

		    }
			
		},
		error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

}