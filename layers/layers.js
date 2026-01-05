var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LOTE_1 = new ol.format.GeoJSON();
var features_LOTE_1 = format_LOTE_1.readFeatures(json_LOTE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTE_1.addFeatures(features_LOTE_1);
var lyr_LOTE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTE_1, 
                style: style_LOTE_1,
                popuplayertitle: 'LOTE',
                interactive: true,
                title: '<img src="styles/legend/LOTE_1.png" /> LOTE'
            });
var format_LINDERO_2 = new ol.format.GeoJSON();
var features_LINDERO_2 = format_LINDERO_2.readFeatures(json_LINDERO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LINDERO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LINDERO_2.addFeatures(features_LINDERO_2);
var lyr_LINDERO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LINDERO_2, 
                style: style_LINDERO_2,
                popuplayertitle: 'LINDERO',
                interactive: true,
                title: '<img src="styles/legend/LINDERO_2.png" /> LINDERO'
            });
var format_VERTICES_3 = new ol.format.GeoJSON();
var features_VERTICES_3 = format_VERTICES_3.readFeatures(json_VERTICES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VERTICES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VERTICES_3.addFeatures(features_VERTICES_3);
var lyr_VERTICES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VERTICES_3, 
                style: style_VERTICES_3,
                popuplayertitle: 'VERTICES',
                interactive: true,
                title: '<img src="styles/legend/VERTICES_3.png" /> VERTICES'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_LOTE_1.setVisible(true);lyr_LINDERO_2.setVisible(true);lyr_VERTICES_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LOTE_1,lyr_LINDERO_2,lyr_VERTICES_3];
lyr_LOTE_1.set('fieldAliases', {'id': 'id', 'Area': 'Area', });
lyr_LINDERO_2.set('fieldAliases', {'cat': 'cat', 'id': 'id', 'Distance': 'Distance', 'Azimuth': 'Azimuth', 'Rumbo': 'Rumbo', });
lyr_VERTICES_3.set('fieldAliases', {'id': 'id', 'Norte': 'Norte', 'Este': 'Este', });
lyr_LOTE_1.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', });
lyr_LINDERO_2.set('fieldImages', {'cat': 'Range', 'id': 'Range', 'Distance': 'TextEdit', 'Azimuth': 'TextEdit', 'Rumbo': 'TextEdit', });
lyr_VERTICES_3.set('fieldImages', {'id': 'TextEdit', 'Norte': 'TextEdit', 'Este': 'TextEdit', });
lyr_LOTE_1.set('fieldLabels', {'id': 'hidden field', 'Area': 'inline label - always visible', });
lyr_LINDERO_2.set('fieldLabels', {'cat': 'hidden field', 'id': 'hidden field', 'Distance': 'inline label - always visible', 'Azimuth': 'inline label - always visible', 'Rumbo': 'inline label - always visible', });
lyr_VERTICES_3.set('fieldLabels', {'id': 'inline label - always visible', 'Norte': 'inline label - always visible', 'Este': 'inline label - always visible', });
lyr_VERTICES_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});