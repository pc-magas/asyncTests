const _=require('lodash');

const callCallbackWhenCompleted=function(status,statusCompleted,callback){
	
	if( _.isEqual(status,statusCompleted) ) {
		process.nextTick(callback);
	}
}

const call1Function=function(callback){
	setTimeout(callback,1000);
}

const call2Function=function(callback){
	setTimeout(callback,300);
}

const finished=function(){
	console.log("finished")
}

const callAsyncFunctions=function(call2,prefix,callback) {
	const status=(call2)?['call2','call1']:['call1'];
	let statusCompleted=[];
	
	const internalCallback=function(action){
		statusCompleted.push(action);
		console.log(prefix," Status: ",status," Call2 Param: ",call2);
		callCallbackWhenCompleted(status,statusCompleted,callback)	
	}
	
	call1Function(()=>{internalCallback('call1');});
	if(call2){
		call2Function(()=>{internalCallback('call2');});
	}
}

callAsyncFunctions(false,"Function one",finished);
callAsyncFunctions(true,"Function one and two",finished);
callAsyncFunctions(true,"Function one and two",finished);
callAsyncFunctions(true,"Function one and two",finished);
callAsyncFunctions(false,"Function one",finished);
callAsyncFunctions(true,"Function one and two",finished);
callAsyncFunctions(false,"Function one",finished);
callAsyncFunctions(false,"Function one",finished);
callAsyncFunctions(false,"Function one",finished);
callAsyncFunctions(false,"Function one",finished);
callAsyncFunctions(true,"Function one and two",finished);
callAsyncFunctions(true,"Function one and two",finished);
callAsyncFunctions(true,"Function one and two",finished);
callAsyncFunctions(true,"Function one and two",finished);
callAsyncFunctions(true,"Function one and two",finished);
callAsyncFunctions(true,"Function one and two",finished);
callAsyncFunctions(true,"Function one and two",finished);
callAsyncFunctions(true,"Function one and two",finished);
callAsyncFunctions(true,"Function one and two",finished);
callAsyncFunctions(true,"Function one and two",finished);
callAsyncFunctions(true,"Function one and two",finished);
