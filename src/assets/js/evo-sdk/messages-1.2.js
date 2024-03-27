var messages = {


	// SweetAlert Headers
	warningAlertHeader : "Aten&ccedil;&atilde;o:",
	successAlertHeader : "Sucesso:",
	errorAlertHeader   : "Erro:",
	infoAlertHeader    : "Info:", 

	// Error Mesages
	errorMessageVerify        : "Verifique se o SDK-Desktop est&aacute; funcionando",
	errorMessageVerifyHttps   : "1) Verifique se o SDK-Desktop est&aacute; funcionando <br />2) Verifique se seu navegador est&aacute; configurado para conex&otilde;es seguras <a href=\"http://localhost:8585/site\" target=\"_blank\">aqui</a>",
	errorMessageComunication  : "N&atilde;o foi poss&iacute;vel comunicar com a aplica&ccedil;&atilde;o.<br />",
	errorMessageLogin         : "N&atilde;o foi poss&iacute;vel realizar o login.<br />",
	errorTokenInfo            : "N&atilde;o foi poss&iacute;vel obter as informa&ccedil;&otilde;es do Token.<br /> Verifique se ele estÃ¡ conectado. <br />",
	errorTokenPresent         : "N&atilde;o foi poss&iacute;vel verificar se o Token est&acute; presente. <br />",
	errorCreateCertificate    : "N&atilde;o foi poss&iacute;vel gerar um novo certificado. <br />",
	errorInstallCertificate   : "N&atilde;o foi poss&iacute;vel instalar o certificado. <br />" ,
	errorUnsuportedSDKVersion : "Opera&ccedil;&atilde;o n&atilde;o suportada. Atualize sua vers&atilde;o do SDK-Desktop.",
	errorNoPureCcontent		  : "Conte&uacute;do n&atilde;o foi informado para assinatura",

	// Warning Messages
	warningNoFileTosign       : "Nenhum arquivo para assinar.",
	warningNoCallbackFunction : "Conteudo assinado, mas nada feito com a assinatura.",


	// Sucess Messages
	successSignDocuments      : "Documentos assinados com sucesso",
	successSignSendDocuments  : "Documentos assinados e enviados com sucesso",



	// Combined messages
	errorMessageAliveHttp     : "N&atilde;o foi poss&iacute;vel comunicar com a aplica&ccedil;&atilde;o.<br />" + "Verifique se o SDK-Desktop est&aacute; funcionando",
	errorMessageAliveHttps    : "N&atilde;o foi poss&iacute;vel comunicar com a aplica&ccedil;&atilde;o.<br />" + "1) Verifique se o SDK-Desktop est&aacute; funcionando <br />2) Verifique se seu navegador est&aacute; configurado para conex&otilde;es seguras <a href=\"http://localhost:8585/site\" target=\"_blank\">aqui</a>",
	errorMessageConfiguration : "N&atilde;o foi poss&iacute;vel salvar as configura&ccedil;&otilde;es.<br />" + "1) Verifique se o SDK-Desktop est&aacute; funcionando <br />2) Verifique se seu navegador est&aacute; configurado para conex&otilde;es seguras <a href=\"http://localhost:8585/site\" target=\"_blank\">aqui</a>",
	errorMessageMacAddress    : "N&atilde;o foi poss&iacute;vel carregar o MacAddress da m&aacute;quina.<br />" + "1) Verifique se o SDK-Desktop est&aacute; funcionando <br />2) Verifique se seu navegador est&aacute; configurado para conex&otilde;es seguras <a href=\"http://localhost:8585/site\" target=\"_blank\">aqui</a>",
	errorGetTokenInfo         : "N&atilde;o foi poss&iacute;vel obter as informa&ccedil;&otilde;es do Token.<br /> Verifique se ele estÃ¡ conectado. <br />" + "1) Verifique se o SDK-Desktop est&aacute; funcionando <br />2) Verifique se seu navegador est&aacute; configurado para conex&otilde;es seguras <a href=\"http://localhost:8585/site\" target=\"_blank\">aqui</a>",
	errorIsTokenPresent       : "N&atilde;o foi poss&iacute;vel verificar se o Token est&acute; presente. <br />" + "1) Verifique se o SDK-Desktop est&aacute; funcionando <br />2) Verifique se seu navegador est&aacute; configurado para conex&otilde;es seguras <a href=\"http://localhost:8585/site\" target=\"_blank\">aqui</a>",


	// functions
	errorCallSignService      : function(service, error) {
		json = JSON.parse(error);
		return "N&atilde;o foi poss&iacute;vel chamar o seguinte servi&ccedil;o de assinatura: " + service + "<br />" + json.failure.causes[1].message
	},
	errorChallengeResponse    : function(error) {
		json = JSON.parse(error);
		return self.errorMessageLogin + json.failure.causes[1].message
	},
	errorCreateNewCertificate : function(error) {
		json = JSON.parse(error);
		return self.errorCreateCertificate + json.failure.causes[1].message
	},
	errorInstallNewCertificate: function(error) {
		json = JSON.parse(error);
		return self.errorInstallCertificate + json.failure.causes[1].message
	}


}