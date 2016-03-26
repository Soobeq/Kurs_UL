(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function newObject(constructor) {
        var Arr = new Array();
        var Obj = Object.create(constructor.prototype);
        for(var i=1; i<arguments.length;i++){
            Arr.push(arguments[i]);
        }
        cons_ok = constructor.apply(Obj,Arr);
        if(cons_ok){    
        Obj = cons_ok;}
            return Obj;        
    }
	global.UAM.newObject = newObject;
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
*/


