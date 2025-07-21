const { auth } = require('../middleware/auth.js');

const Router=require('express').Router;
const router=Router()

// router.use(auth)

router.get('/getproductobyid/:id', auth, (req,res)=>{

    // console.log("ingresa a getproductobyid")

    res.setHeader('Content-Type','application/json')
    res.status(200).json(
        [
            {
                "PRODUCTO_ID": "000009",
                "CODIGO_PRODUCTO": "30",
                "SUBCODIGO_1": "",
                "SUBCODIGO_2": "",
                "DESCRIPCION": "BARRA DE SILICONA 1.12 X 30CM P/PISTOLA POR KILO",
                "NOMBRE": "",
                "MARCA": "",
                "FRACCIONABLE": "0",
                "UNIDAD_FRACCION": "",
                "COSTO": "",
                "UNIDAD_ID": "UN",
                "TIPO_PRODUCTO_ID": "",
                "PAIS_ID": "AR",
                "FAMILIA_ID": "DF",
                "CRITERIO_ID": "",
                "OBSERVACIONES": "0",
                "POSICIONES_PURAS": "0",
                "KIT": "0",
                "SERIE_EGR": "0",
                "MONEDA_ID": "",
                "NO_AGRUPA_ITEMS": "0",
                "LARGO": "1.000",
                "ALTO": "1.000",
                "ANCHO": "1.000",
                "UNIDAD_VOLUMEN": "M3",
                "VOLUMEN_UNITARIO": "1",
                "PESO": "1",
                "UNIDAD_PESO": "KG",
                "PESO_UNITARIO": "1",
                "LOTE_AUTOMATICO": "0",
                "PALLET_AUTOMATICO": "0",
                "INGRESO": "ING_ABAST_F",
                "EGRESO": "PICK_ABAST",
                "INVENTARIO": "",
                "TRANSFERENCIA": "",
                "TOLERANCIA_MIN": "100.00",
                "TOLERANCIA_MAX": "100.00",
                "BACK_ORDER": "1",
                "CLASIFICACION_COT": "",
                "CODIGO_BARRA": "",
                "ING_CAT_LOG_ID": "DISPONIBLE",
                "EGR_CAT_LOG_ID": "",
                "SUB_FAMILIA_ID": "DF",
                "TIPO_CONTENEDORA": "0",
                "GRUPO_PRODUCTO": "NO",
                "ENVASE": "0",
                "VAL_COD_ING": "0",
                "VAL_COD_EGR": "0",
                "ROTACION_ID": "A",
                "FLG_BULTO": "1",
                "QTY_BULTO": "1",
                "FLG_VOLUMEN_ETI": "0",
                "QTY_VOLUMEN_ETI": "",
                "FLG_CONTENEDORA": "0",
                "SERIE_ING": "0",
                "TIE_IN": "0",
                "ingLoteProveedor": "1",
                "ingPartida": "0",
                "NRO_PARTIDA_AUTOMATICO": "0",
                "TRANSF_PICKING": "0",
                "ET_TAREA_CONF": "0",
                "INACTIVO": "0",
                "flg_pick_mayor": "0",
                "FLG_LOTE_PURO": "0",
                "FLG_PARTIDA_PURA": "0",
                "DIAS_VENC_CAT_LOG": "",
                "CODIGO_ALTERNATIVO": ""
            }
        ]
    )
})

router.get("/getfamilia", auth, (req, res)=>{


    res.setHeader('Content-Type','application/json');
    return res.status(200).json(
        [
            {
                "FAMILIA_ID": "",
                "DESCRIPCION": "Herbicidas"
            },
            {
                "FAMILIA_ID": "0110",
                "DESCRIPCION": "PARED GRUESA(35 MIL)"
            },
            {
                "FAMILIA_ID": "0120",
                "DESCRIPCION": "PARED MEDIA (10-35)"
            },
            {
                "FAMILIA_ID": "0130",
                "DESCRIPCION": "PARED FINA (10 MIL)"
            },
            {
                "FAMILIA_ID": "0150",
                "DESCRIPCION": "CINTA IMPORTADA"
            },
            {
                "FAMILIA_ID": "0170",
                "DESCRIPCION": "CINTA NACIONAL"
            },
            {
                "FAMILIA_ID": "0210",
                "DESCRIPCION": "TUBERIAS DE PVC"
            },
            {
                "FAMILIA_ID": "0220",
                "DESCRIPCION": "TUBERIAS DE PE"
            },
            {
                "FAMILIA_ID": "0230",
                "DESCRIPCION": "TUBERIAS LAYFLAT"
            },
            {
                "FAMILIA_ID": "0310",
                "DESCRIPCION": "ACCESORIOS DE PE"
            },
            {
                "FAMILIA_ID": "0320",
                "DESCRIPCION": "ACCES. P/ MANGAS"
            },
            {
                "FAMILIA_ID": "0330",
                "DESCRIPCION": "ACCES. P/ MANDOS HID"
            },
            {
                "FAMILIA_ID": "0410",
                "DESCRIPCION": "ACCES. PVC IMP / NAC"
            },
            {
                "FAMILIA_ID": "0500",
                "DESCRIPCION": "MONTURAS PLASTICAS"
            },
            {
                "FAMILIA_ID": "0600",
                "DESCRIPCION": "ACCES RACCORD/COMP"
            },
            {
                "FAMILIA_ID": "0710",
                "DESCRIPCION": "FILTROS PLÃ\u0081STICOS"
            },
            {
                "FAMILIA_ID": "0720",
                "DESCRIPCION": "FILTROS METÃ\u0081LICOS"
            },
            {
                "FAMILIA_ID": "0730",
                "DESCRIPCION": "REPUESTOS FILTROS"
            },
            {
                "FAMILIA_ID": "0810",
                "DESCRIPCION": "ASPERSORES AGRICOLAS"
            },
            {
                "FAMILIA_ID": "0820",
                "DESCRIPCION": "ASPERSOR JARDINERIA"
            },
            {
                "FAMILIA_ID": "0850",
                "DESCRIPCION": "MICRO/ NEBULIZADORES"
            },
            {
                "FAMILIA_ID": "0910",
                "DESCRIPCION": "VALVULAS MANUALES"
            },
            {
                "FAMILIA_ID": "0920",
                "DESCRIPCION": "VALVULAS HIDRAÃ\u009aLICAS"
            },
            {
                "FAMILIA_ID": "0930",
                "DESCRIPCION": "VALVULAS ELÃ\u0089CTRICAS"
            },
            {
                "FAMILIA_ID": "0940",
                "DESCRIPCION": "VALVULAS DE AIRE"
            },
            {
                "FAMILIA_ID": "0950",
                "DESCRIPCION": "REP.VALVULA / ANTICI"
            },
            {
                "FAMILIA_ID": "1100",
                "DESCRIPCION": "GOTERO/LATERAL/MICRO"
            },
            {
                "FAMILIA_ID": "1200",
                "DESCRIPCION": "JARDINERIA /AC.COMPL"
            },
            {
                "FAMILIA_ID": "1310",
                "DESCRIPCION": "PROGRAMADORES Y COMP"
            },
            {
                "FAMILIA_ID": "1320",
                "DESCRIPCION": "INYECTORES FERT/ REP"
            },
            {
                "FAMILIA_ID": "1330",
                "DESCRIPCION": "CAUDALIMETROS"
            },
            {
                "FAMILIA_ID": "1340",
                "DESCRIPCION": "MEDICION/ HERRAMIENTA"
            },
            {
                "FAMILIA_ID": "1500",
                "DESCRIPCION": "ENROLADORES Y ACC."
            },
            {
                "FAMILIA_ID": "1600",
                "DESCRIPCION": "BOMBAS MOTORES Y REP"
            },
            {
                "FAMILIA_ID": "ACCESORIOS",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "ADAPTERS",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "ALL CHARGERS-CAR CHARGERS",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "ALL CHARGERS-POWER-BANKS",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "ALUMBRADO PÚBLICO",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "ARTEFACTOS ESTANCOS",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "Azufrados",
                "DESCRIPCION": "Azufrados"
            },
            {
                "FAMILIA_ID": "Bactericida",
                "DESCRIPCION": "Bactericida"
            },
            {
                "FAMILIA_ID": "Bioestimulantes",
                "DESCRIPCION": "Bioestimulantes"
            },
            {
                "FAMILIA_ID": "CABLES",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "CAMARA",
                "DESCRIPCION": "CAMARA"
            },
            {
                "FAMILIA_ID": "CITYCOCO",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "COSTILLA",
                "DESCRIPCION": "CORTE MEDIO"
            },
            {
                "FAMILIA_ID": "CUBIERTA",
                "DESCRIPCION": "CUBIERTA"
            },
            {
                "FAMILIA_ID": "Cura Semillas",
                "DESCRIPCION": "Cura Semillas"
            },
            {
                "FAMILIA_ID": "D",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "DETECTORES DE TENSION",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "DF",
                "DESCRIPCION": "FAMILIA DEFAULT"
            },
            {
                "FAMILIA_ID": "Dp",
                "DESCRIPCION": "DQ"
            },
            {
                "FAMILIA_ID": "DQ",
                "DESCRIPCION": "DQ"
            },
            {
                "FAMILIA_ID": "DRIVERS",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "ELECTRONICA",
                "DESCRIPCION": "TECNOLOGIA"
            },
            {
                "FAMILIA_ID": "ELECTRONICOS",
                "DESCRIPCION": "ELECTRONICOS"
            },
            {
                "FAMILIA_ID": "ESCALERAS",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "ESTACIÓN DE SERVICIO",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "F11",
                "DESCRIPCION": "Familia F11"
            },
            {
                "FAMILIA_ID": "F12",
                "DESCRIPCION": "Familia F12"
            },
            {
                "FAMILIA_ID": "Fitoregulador",
                "DESCRIPCION": "Fitoregulador"
            },
            {
                "FAMILIA_ID": "Foliares",
                "DESCRIPCION": "Foliares"
            },
            {
                "FAMILIA_ID": "Fosforados",
                "DESCRIPCION": "Fosforados"
            },
            {
                "FAMILIA_ID": "Fungicidas",
                "DESCRIPCION": "Fungicidas"
            },
            {
                "FAMILIA_ID": "GENERADORES SOLARES",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "Girasol",
                "DESCRIPCION": "Girasol"
            },
            {
                "FAMILIA_ID": "GUIRNALDAS",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "Herbicidas",
                "DESCRIPCION": "Herbicidas"
            },
            {
                "FAMILIA_ID": "HUBS & DOCKS",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "Insecticidas",
                "DESCRIPCION": "Insecticidas"
            },
            {
                "FAMILIA_ID": "KITS",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "LÁMPARAS ALUMBRADO PÚBLICO",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "LÁMPARAS BULBO",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "LÁMPARAS CILÍNDRICAS",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "LÁMPARAS DICRO Y AR111",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "LÁMPARAS EMERGENCY",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "LÁMPARAS G9 Y PERFUME",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "LÁMPARAS GLOBO",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "LÁMPARAS GOTA Y VELA",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "LÁMPARAS LOW BAY",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "LÁMPARAS PAR 30-38",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "LÁMPARAS SERIE T",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "LÁMPARAS VINTAGE",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "LISTONES PARA TUBOS LED",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "LUCES LED AUTOMOTOR",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "LUMINARIA DE EMERGENCIA",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "LUMINARIA HIGH BAY",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "LUMINARIAS DE ESCRITORIO",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "Maiz",
                "DESCRIPCION": "Maiz"
            },
            {
                "FAMILIA_ID": "Mantas para silo",
                "DESCRIPCION": "Mantas para silo"
            },
            {
                "FAMILIA_ID": "Mezclas varias",
                "DESCRIPCION": "Mezclas varias"
            },
            {
                "FAMILIA_ID": "MOTOCICLETAS",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "NALGA",
                "DESCRIPCION": "CUARTO TRASERO"
            },
            {
                "FAMILIA_ID": "Nitrogenados",
                "DESCRIPCION": "Nitrogenados"
            },
            {
                "FAMILIA_ID": "Otros",
                "DESCRIPCION": "Otros"
            },
            {
                "FAMILIA_ID": "PANELES LED APLICAR CIRCULAR",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "PANELES LED APLICAR CIRCULAR P",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "PANELES LED APLICAR CUADRADA",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "PANELES LED APLICAR CUADRADA P",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "PANELES LED BACKLIGHT",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "PANELES LED EMBUTIR CIRCULAR",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "PANELES LED EMBUTIR CIRCULAR N",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "PANELES LED EMBUTIR CUADRADA",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "PANELES LED EMBUTIR CUADRADA N",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "PANELES LED PROFESIONALES",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "Potasicos",
                "DESCRIPCION": "Potasicos"
            },
            {
                "FAMILIA_ID": "PROYECTOR LED",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "PROYECTOR SPORTLIGHT 250W",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "PROYECTORES PROLITE",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "REFLECTORES PROFESIONALES",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "RIB001",
                "DESCRIPCION": "CUARTO TRASERO DE CERDO - FROZEN HINDQUARTER BONE"
            },
            {
                "FAMILIA_ID": "RTO-CORTE",
                "DESCRIPCION": "CUARTO CENTRAL DE CERDO - FROZEN MIDDLEQUARTER BON"
            },
            {
                "FAMILIA_ID": "SENSORES DE MOVIMIENTO Y CELUL",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "Silo Grano Seco",
                "DESCRIPCION": "Silo Grano Seco"
            },
            {
                "FAMILIA_ID": "Soja",
                "DESCRIPCION": "Soja"
            },
            {
                "FAMILIA_ID": "Sorgo",
                "DESCRIPCION": "Sorgo"
            },
            {
                "FAMILIA_ID": "STANDS (ESTUCHES)",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "TEMPORIZADORES",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "TEST_FAMILIA_API",
                "DESCRIPCION": "ESTO ES UNA PRUEBA DE FAMILIA API"
            },
            {
                "FAMILIA_ID": "TIMBRES INALÁMBRICOS",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "TORTUGAS LED CIRCULARES",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "TORTUGAS LED OVAL",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "TUBOS DE LED",
                "DESCRIPCION": ""
            },
            {
                "FAMILIA_ID": "VARIOS",
                "DESCRIPCION": "VARIOS"
            },
            {
                "FAMILIA_ID": "ZUNCHO",
                "DESCRIPCION": ""
            }
        ]
    );
})

router.get("/getsubfamilia", auth, (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json(
        [
            {
                "SUB_FAMILIA_ID": "DF",
                "DESCRIPCION": "DEFAULT"
            },
            {
                "SUB_FAMILIA_ID": "DEFAULT",
                "DESCRIPCION": "DEFAULT"
            },
            {
                "SUB_FAMILIA_ID": "AUTO",
                "DESCRIPCION": "AUTO"
            },
            {
                "SUB_FAMILIA_ID": "CAMARA",
                "DESCRIPCION": "CAMARA"
            },
            {
                "SUB_FAMILIA_ID": "CAMION",
                "DESCRIPCION": "CAMION"
            },
            {
                "SUB_FAMILIA_ID": "",
                "DESCRIPCION": "Fitoregulador"
            },
            {
                "SUB_FAMILIA_ID": "Fitoregulador",
                "DESCRIPCION": "Fitoregulador"
            },
            {
                "SUB_FAMILIA_ID": "Cura Semillas",
                "DESCRIPCION": "Cura Semillas"
            },
            {
                "SUB_FAMILIA_ID": "Soja",
                "DESCRIPCION": "Soja"
            },
            {
                "SUB_FAMILIA_ID": "Silo Grano Seco",
                "DESCRIPCION": "Silo Grano Seco"
            },
            {
                "SUB_FAMILIA_ID": "Mantas para silo",
                "DESCRIPCION": "Mantas para silo"
            },
            {
                "SUB_FAMILIA_ID": "Maiz",
                "DESCRIPCION": "Maiz"
            },
            {
                "SUB_FAMILIA_ID": "Sorgo",
                "DESCRIPCION": "Sorgo"
            },
            {
                "SUB_FAMILIA_ID": "Girasol",
                "DESCRIPCION": "Girasol"
            },
            {
                "SUB_FAMILIA_ID": "Otros",
                "DESCRIPCION": "Otros"
            },
            {
                "SUB_FAMILIA_ID": "AQ",
                "DESCRIPCION": "AQ"
            },
            {
                "SUB_FAMILIA_ID": "FE",
                "DESCRIPCION": "FE"
            },
            {
                "SUB_FAMILIA_ID": "TEST_SUB_FAMILIA_API",
                "DESCRIPCION": "ESTO ES UNA PRUEBA DE FAMILIA API"
            },
            {
                "SUB_FAMILIA_ID": "bgnhjudefrgthyjukiloÃ±pnh151gt",
                "DESCRIPCION": "SUB Familia F1 descripcion 2nhjudefrgthyjukiloÃ\u0083Â±pn"
            },
            {
                "SUB_FAMILIA_ID": "SIN SUBRUBRO",
                "DESCRIPCION": "SIN SUBRUBRO"
            },
            {
                "SUB_FAMILIA_ID": "AUTOMATICOS",
                "DESCRIPCION": "AUTOMATICOS"
            },
            {
                "SUB_FAMILIA_ID": "ACCESORIOS",
                "DESCRIPCION": "ACCESORIOS"
            },
            {
                "SUB_FAMILIA_ID": "USO EN RIEGO",
                "DESCRIPCION": "USO EN RIEGO"
            },
            {
                "SUB_FAMILIA_ID": "JARDINERIA",
                "DESCRIPCION": "JARDINERIA"
            },
            {
                "SUB_FAMILIA_ID": "REPUESTOS",
                "DESCRIPCION": "REPUESTOS"
            },
            {
                "SUB_FAMILIA_ID": "AGRICULTURA",
                "DESCRIPCION": "AGRICULTURA"
            },
            {
                "SUB_FAMILIA_ID": "MANUAL",
                "DESCRIPCION": "MANUAL"
            },
            {
                "SUB_FAMILIA_ID": "INDUSTRIALES",
                "DESCRIPCION": "INDUSTRIALES"
            },
            {
                "SUB_FAMILIA_ID": "ASPERSORES METALICOS",
                "DESCRIPCION": "ASPERSORES METALICOS"
            },
            {
                "SUB_FAMILIA_ID": "ASPERSORES PLASTICOS",
                "DESCRIPCION": "ASPERSORES PLASTICOS"
            },
            {
                "SUB_FAMILIA_ID": "CAÑONES",
                "DESCRIPCION": "CAÃ\u0091ONES"
            },
            {
                "SUB_FAMILIA_ID": "ARTICULOS IMPORTADOS",
                "DESCRIPCION": "ARTICULOS IMPORTADOS"
            },
            {
                "SUB_FAMILIA_ID": "SANITARIOS",
                "DESCRIPCION": "SANITARIOS"
            },
            {
                "SUB_FAMILIA_ID": "COMPENSADOS",
                "DESCRIPCION": "COMPENSADOS"
            },
            {
                "SUB_FAMILIA_ID": "NORMAL",
                "DESCRIPCION": "NORMAL"
            },
            {
                "SUB_FAMILIA_ID": "CINTA 8 MIL CADA 10",
                "DESCRIPCION": "CINTA 8 MIL CADA 10"
            },
            {
                "SUB_FAMILIA_ID": "ARTICULOS NACIONALES",
                "DESCRIPCION": "ARTICULOS NACIONALES"
            },
            {
                "SUB_FAMILIA_ID": "CINTA 8 MIL CADA 30",
                "DESCRIPCION": "CINTA 8 MIL CADA 30"
            },
            {
                "SUB_FAMILIA_ID": "CINTA 8 MIL CADA 20",
                "DESCRIPCION": "CINTA 8 MIL CADA 20"
            },
            {
                "SUB_FAMILIA_ID": "MICROASPERSORES",
                "DESCRIPCION": "MICROASPERSORES"
            },
            {
                "SUB_FAMILIA_ID": "CINTA 5 MIL CADA 10",
                "DESCRIPCION": "CINTA 5 MIL CADA 10"
            },
            {
                "SUB_FAMILIA_ID": "CINTA 6 MIL CADA 20",
                "DESCRIPCION": "CINTA 6 MIL CADA 20"
            },
            {
                "SUB_FAMILIA_ID": "CINTA 5 MIL CADA 20",
                "DESCRIPCION": "CINTA 5 MIL CADA 20"
            },
            {
                "SUB_FAMILIA_ID": "CINTA 6 MIL CADA 10",
                "DESCRIPCION": "CINTA 6 MIL CADA 10"
            },
            {
                "SUB_FAMILIA_ID": "CINTA 6 MIL CADA 30",
                "DESCRIPCION": "CINTA 6 MIL CADA 30"
            },
            {
                "SUB_FAMILIA_ID": "REFORZADOS",
                "DESCRIPCION": "REFORZADOS"
            },
            {
                "SUB_FAMILIA_ID": "TUBERIAS CONDUCC DE AGUA",
                "DESCRIPCION": "TUBERIAS CONDUCC DE AGUA"
            },
            {
                "SUB_FAMILIA_ID": "MINIASPERSORES",
                "DESCRIPCION": "MINIASPERSORES"
            },
            {
                "SUB_FAMILIA_ID": "NEBULIZADORES",
                "DESCRIPCION": "NEBULIZADORES"
            },
            {
                "SUB_FAMILIA_ID": "ROTORES",
                "DESCRIPCION": "ROTORES"
            },
            {
                "SUB_FAMILIA_ID": "TOBERAS",
                "DESCRIPCION": "TOBERAS"
            },
            {
                "SUB_FAMILIA_ID": "CINTA 12 MIL CADA 10",
                "DESCRIPCION": "CINTA 12 MIL CADA 10"
            },
            {
                "SUB_FAMILIA_ID": "CINTA 10 MIL CADA",
                "DESCRIPCION": "CINTA 10 MIL CADA"
            },
            {
                "SUB_FAMILIA_ID": "D",
                "DESCRIPCION": ""
            },
            {
                "SUB_FAMILIA_ID": "ENTRONONULL",
                "DESCRIPCION": ""
            }
        ]
    );
})

router.post("/postinsproductoampliado", auth, (req, res)=>{
    console.log(req.body)
    let {
        "COD. PRODUCTO":artcod, 
        DESCRIPCION,
    }=req.body

    if(!artcod || !DESCRIPCION){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`COD. PRODUCTO y DESCRIPTION son campos requeridos`})
    }

    if(artcod=="001010001"){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El producto con código ${artcod} ya existe en DB`})
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({
        payload:`Producto recibido!`, 
        message: `Mensaje adicional`,
        producto: req.body
    });
})

module.exports=router