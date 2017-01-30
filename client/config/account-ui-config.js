accountsUIBootstrap3.setLanguage('pt-BR'); // for Portuguese (Brazil)

Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'first-name',
        fieldLabel: 'Nome',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Por favor, preencha o seu nome");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'last-name',
        fieldLabel: 'Sobrenome',
        inputType: 'text',
        visible: true,
    }, {
        fieldName: 'Gênero',
        showFieldLabel: false,      // If true, fieldLabel will be shown before radio group
        fieldLabel: 'Gender',
        inputType: 'radio',
        radioLayout: 'vertical',    // It can be 'inline' or 'vertical'
        data: [{                    // Array of radio options, all properties are required
            id: 1,                  // id suffix of the radio element
            label: 'Masculino',          // label for the radio element
            value: 'm'              // value of the radio element, this will be saved.
          }, {
            id: 2,
            label: 'Feminino',
            value: 'f',
            checked: 'checked'
        }],
        visible: true
    }, {
        fieldName: 'country',
        fieldLabel: 'Country',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Please select your country of residence',
        data: [{
            id: 1,
            label: 'United States',
            value: 'us'
          }, {
            id: 2,
            label: 'Spain',
            value: 'es',
        }],
        visible: true
    }, {
        fieldName: 'terms',
        fieldLabel: 'Eu aceito os termos e condições',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('You must accept the terms and conditions.');
                return false;
            }
        }
    }]
});
