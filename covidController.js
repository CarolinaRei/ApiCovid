//Import Covid Model
Covid = require('./covidModel');

//listar novos casos
exports.novos = function (req, res) {
    var casos = [];
    Covid.get(function (err, covid) {
        
        if (err)
            res.json({
                status: "error",
                message: err
            });
        for(var i=0;i<covid.length;i++){
            casos.push(covid[i].casos_novos+ ' casos novos em '+ covid[i].data);
        }
        res.json({
            message: "Obtido os casos novos com sucesso",
            novos_casos: casos
        });
    });
};

exports.inter = function (req, res) {
    var internados = [];
    var dia = [];
    Covid.get(function (err, covid) {
        
        if (err)
            res.json({
                status: "error",
                message: err
            });
        for(var i=0;i<covid.length;i++){
            internados.push(covid[i].casos_internados + ' casos internados em '+ covid[i].data);
        }
        res.json({
            message: "Obtido as pessoas internadas com sucesso",
            internados: internados
        });
    });
};

exports.max = function (req, res) {
    var max=0;
    Covid.get(function (err, covid) {
        
        if (err)
            res.json({
                status: "error",
                message: err
            });
        for(var i=0;i<covid.length;i++){
            if(max<covid[i].casos_novos){

            max = covid[i].casos_novos;
            }
        }
        res.json({
            message: "Obtido o dia com mais casos novos com sucesso",
            dia_max: max+ " casos no dia c/ mais casos"
        });
    });
};

exports.min = function (req, res) {
    var min=100000;
    Covid.get(function (err, covid) {
        
        if (err)
            res.json({
                status: "error",
                message: err
            });
        for(var i=0;i<covid.length;i++){
            if(min>covid[i].casos_novos){

            min = covid[i].casos_novos;
            }
        }
        res.json({
            message: "Obtido o dia com menos casos novos com sucesso",
            dia_min: min+ " casos no dia c/ menos casos"
        });
    });
};

exports.med = function (req, res) {
    var med=0;
    Covid.get(function (err, covid) {
        
        if (err)
            res.json({
                status: "error",
                message: err
            });
        for(var i=0;i<covid.length;i++){
            

            med += covid[i].casos_novos;
            
        }
        med = med/covid.length;
        res.json({
            message: "Obtidoa media dos dias com sucesso",
            media_dias: Math.round(med)+ " casos novos de media"
        });
    });
};

exports.tot = function (req, res) {
    var tot=0;
    Covid.get(function (err, covid) {
        
        if (err)
            res.json({
                status: "error",
                message: err
            });
        for(var i=0;i<covid.length;i++){

            tot += covid[i].casos_novos;
            
        }
        res.json({
            message: "Obtido o total de casos novos da semana com sucesso",
            total: tot + " casos no total"
        });
    });
};