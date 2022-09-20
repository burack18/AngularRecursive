import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data =[
    {
      "id": "kz47zc45",
      "name": "field_1643725934355",
      "spec": {
        "attributes": {
          "fieldClass": "",
          "placeholder": "",
          "type": "text",
          "value": ""
        },
        "options": {
          "label": "Wat is je naam?",
          "shortDescription": ""
        },
        "control": {
          "name": "text",
          "version": "1.0.0"
        }
      },
      "state": {
        "editable": true,
        "editMode": true,
        "autocompletable": false,
        "extraInfoCollapsed": true,
        "collapsible": false,
        "collapsed": false
      },
      "inputFilter": {
        "name": "",
        "required": false,
        "errorMessage": "Dit veld is verplicht.",
        "validators": []
      }
    },
    {
      "id": "kz47zs3a",
      "name": "field_1643725955062",
      "spec": {
        "attributes": {
          "fieldClass": "",
          "placeholder": "",
          "type": "fieldGroup",
          "value": ""
        },
        "options": {
          "fields": [
            {
              "id": "kz47zwbl",
              "name": "field_1643725960533",
              "spec": {
                "attributes": {
                  "fieldClass": "",
                  "placeholder": "",
                  "type": "number",
                  "value": ""
                },
                "options": {
                  "label": "Aantal honden?",
                  "shortDescription": ""
                },
                "control": {
                  "name": "number",
                  "version": "1.0.0"
                }
              },
              "state": {
                "editable": true,
                "editMode": true,
                "autocompletable": false,
                "extraInfoCollapsed": true,
                "collapsible": false,
                "collapsed": false
              },
              "inputFilter": {
                "name": "",
                "required": false,
                "errorMessage": "Vul een nummer in",
                "validators": []
              }
            },
            {
              "id": "kz480bb9",
              "name": "field_1643725979973",
              "spec": {
                "attributes": {
                  "fieldClass": "",
                  "placeholder": "",
                  "type": "fieldGroup",
                  "value": ""
                },
                "options": {
                  "fields": [
                    {
                      "id": "kz480yt9",
                      "name": "field_1643726010428",
                      "spec": {
                        "attributes": {
                          "fieldClass": "",
                          "placeholder": "",
                          "type": "text",
                          "value": ""
                        },
                        "options": {
                          "label": "Naam van de hond?",
                          "shortDescription": ""
                        },
                        "control": {
                          "name": "text",
                          "version": "1.0.0"
                        }
                      },
                      "state": {
                        "editable": true,
                        "editMode": true,
                        "autocompletable": false,
                        "extraInfoCollapsed": true,
                        "collapsible": false,
                        "collapsed": false
                      },
                      "inputFilter": {
                        "name": "",
                        "required": false,
                        "errorMessage": "Dit veld is verplicht.",
                        "validators": []
                      }
                    }
                  ],
                  "title": "Veldgroep in veldgroep",
                  "subtitle": ""
                }
              },
              "state": {
                "editable": true,
                "editMode": true,
                "autocompletable": false,
                "extraInfoCollapsed": true,
                "collapsible": false,
                "collapsed": false
              },
              "inputFilter": {
                "name": "",
                "required": false,
                "errorMessage": "",
                "validators": []
              }
            }
          ],
          "title": "Eerste veldgroep",
          "subtitle": ""
        }
      },
      "state": {
        "editable": true,
        "editMode": true,
        "autocompletable": false,
        "extraInfoCollapsed": true,
        "collapsible": false,
        "collapsed": false
      },
      "inputFilter": {
        "name": "",
        "required": false,
        "errorMessage": "",
        "validators": []
      }
    }
  ]

  
  ngOnInit(): void {
    console.log("menu")
  }
  title = 'angular-recursiv';
}
