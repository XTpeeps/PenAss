/ �����������

function getName(){
var familyNames = new Array(
"��", "Ǯ", "��", "��", "��", "��", "֣", "��", "��", "��", 
"��", "��", "��", "��", "��", "��", "��", "��", "��", "��",
"��", "��", "ʩ", "��", "��", "��", "��", "��", "��", "κ", 
"��", "��", "��", "л", "��", "��", "��", "ˮ", "�", "��",
"��", "��", "��", "��", "��", "��", "��", "��", "³", "Τ", 
"��", "��", "��", "��", "��", "��", "��", "��", "Ԭ", "��",
"ۺ", "��", "ʷ", "��", "��", "��", "�", "Ѧ", "��", "��", 
"��", "��", "��", "��", "��", "��", "��", "��", "��", "��",
"��", "��", "ʱ", "��", "Ƥ", "��", "��", "��", "��", "��", 
"Ԫ", "��", "��", "��", "ƽ", "��", "��", "��", "��", "��"
);
var givenNames = new Array(
"���", "�", "����", "����", "����", "��", "��", "��", "����", "����", "����", 
"���", "����", "�泽", "�淫", "��Ƚ", "誴�", "���", "����", "��", "���", 
"����", "����", "�Ƴ�", "����", "����", "����", "����", "�˺�", "����", "����", 
"����", "���", "����", "�Ľ�", "��Դ", "����", "����", "����", "�ۼ�", "�½�", 
"����", "���", "��", "����", "����", "����", "��", "����", "���", "ΰ��", 
"��Խ", "����", "��", "�绪", "��Ө", "�辧", "��Ϫ", "�꺭", "����", "����", 
"�ӳ�", "����", "����", "��", "���", "��", "��Զ", "����", "��Զ", "����", 
"����", "�ѻ�", "����", "���", "���", "����", "���", "����", "��ɯ", "����", 
"����", "����", "����", "һ��", "�ﳿ", "���", "���", "����", "����", "�ź�", 
"����", "ʫ��", "����", "����", "���", "�h��", "���", "���", "����", "����"
);
var i = parseInt( * Math.random())* + parseInt( * Math.random());
var familyName = familyNames[i];
var j = parseInt( * Math.random())* + parseInt( * Math.random());
var givenName = givenNames[i];
var name = familyName + givenName;
var x = document.getElementsByName("client_name");
for (var i = ; i < x.length; i++) {
var o = x[i];
o.value = name;
}
} 
//��������ֻ���

function getMoble() {
var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
var i = parseInt(10 * Math.random());
var prefix = prefixArray[i];
for (var j = 0; j < 8; j++) {
prefix = prefix + Math.floor(Math.random() * 10);
}
var x = document.getElementsByName("mobile_tel");
for (var i = 0; i < x.length; i++) {
var o = x[i];
o.value = prefix;
}
}
// ����������֤��

function getId_no(){
var coefficientArray = [ "7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"];// ��Ȩ����
var lastNumberArray = [ "1","0","X","9","8","7","6","5","4","3","2"];// У����
var address = "420101"; // סַ
var birthday = "19810101"; // ����
var s = Math.floor(Math.random()*10).toString() + Math.floor(Math.random()*10).toString() + Math.floor(Math.random()*10).toString();
var array = (address + birthday + s).split(""); 
var total = 0;
for(i in array){
total = total + parseInt(array[i])*parseInt(coefficientArray[i]);
} 
var lastNumber = lastNumberArray[parseInt(total%11)];
var id_no_String = address + birthday + s + lastNumber;
var x = document.getElementsByName("id_no");
for (var i = 0; i < x.length; i++) {
var o = x[i];
o.value = id_no_String;
}
} 
//����������п���

function getBank_account() {
var bank_no = document.getElementById("bank_no_select").value; 
var prefix = "";
switch (bank_no) {
case "0102":
prefix = "622202";
break;
case "0103":
prefix = "622848";
break;
case "0105":
prefix = "622700";
break;
case "0301":
prefix = "622262";
break; 
case "104":
prefix = "621661";
break; 
case "0303":
prefix = "622666";
break;
case "305":
prefix = "622622";
break;
case "0306":
prefix = "622556";
break;
case "0308":
prefix = "622588";
break;
case "0410":
prefix = "622155";
break;
case "302":
prefix = "622689";
break;
case "304":
prefix = "622630";
break;
case "309":
prefix = "622908";
break;
case "310":
prefix = "621717";
break;
case "315":
prefix = "622323";
break;
case "316":
prefix = "622309";
break; 
default:
}
for (var j = 0; j < 13; j++) {
prefix = prefix + Math.floor(Math.random() * 10);
}
var x = document.getElementsByName("bank_no");
for (var i = 0; i < x.length; i++) {
var o = x[i];
o.value = bank_no;
}
var y = document.getElementsByName("bank_account");
for (var i = 0; i < y.length; i++) {
var o = y[i];
o.value = prefix;
}
}