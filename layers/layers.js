var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_uas_1 = new ol.format.GeoJSON();
var features_building_uas_1 = format_building_uas_1.readFeatures(json_building_uas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_uas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_uas_1.addFeatures(features_building_uas_1);
var lyr_building_uas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_uas_1, 
                style: style_building_uas_1,
                interactive: true,
                title: '<img src="styles/legend/building_uas_1.png" /> building_uas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_uas_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_uas_1];
lyr_building_uas_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'substation': 'substation', 'power': 'power', 'operator': 'operator', 'description': 'description', 'school:type_idn': 'school:type_idn', 'religion': 'religion', 'sport': 'sport', 'leisure': 'leisure', 'office': 'office', 'amenity': 'amenity', 'shop': 'shop', 'tourism': 'tourism', 'admin_level': 'admin_level', 'operator:type': 'operator:type', 'name': 'name', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', 'type': 'type', });
lyr_building_uas_1.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'substation': '', 'power': '', 'operator': '', 'description': '', 'school:type_idn': '', 'religion': '', 'sport': '', 'leisure': '', 'office': '', 'amenity': '', 'shop': '', 'tourism': '', 'admin_level': '', 'operator:type': '', 'name': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', 'type': '', });
lyr_building_uas_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'substation': 'no label', 'power': 'no label', 'operator': 'no label', 'description': 'no label', 'school:type_idn': 'no label', 'religion': 'no label', 'sport': 'no label', 'leisure': 'no label', 'office': 'no label', 'amenity': 'no label', 'shop': 'no label', 'tourism': 'no label', 'admin_level': 'no label', 'operator:type': 'no label', 'name': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', 'type': 'no label', });
lyr_building_uas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});