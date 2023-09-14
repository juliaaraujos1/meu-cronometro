import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements';

class Cronometro extends Component {
    constructor() {
        super();
        this.state = {
            horas: 0,
            minutos: 0,
            segundos: 0,
            cronometroAtivo: false,
            ultimoTempoMedido: '00:00:00',
        };
        this.interval = null;
    }

    iniciarCronometro = () => {
        if (!this.state.cronometroAtivo) {
            this.setState({ cronometroAtivo: true });
            this.interval = setInterval(() => {
                const { horas, minutos, segundos } = this.state;
                if (segundos === 59) {
                    if (minutos === 59) {
                        this.setState({ horas: horas + 1, minutos: 0, segundos: 0 });
                    } else {
                        this.setState({ minutos: minutos + 1, segundos: 0 });
                    }
                } else {
                    this.setState({ segundos: segundos + 1 });
                }
            }, 1000);
        } else {
            clearInterval(this.interval);
            this.setState({ cronometroAtivo: false });
        }
    };

    reiniciarCronometro = () => {
        clearInterval(this.interval);
        this.setState({
            horas: 0,
            minutos: 0,
            segundos: 0,
            cronometroAtivo: false,
            ultimoTempoMedido: this.formatarTempo(),
        });
    };

    formatarTempo = () => {
        const { horas, minutos, segundos } = this.state;
        const formatarDigito = (numero) => (numero < 10 ? `0${numero}` : `${numero}`);
        return `${formatarDigito(horas)}:${formatarDigito(minutos)}:${formatarDigito(segundos)}`;
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <View style={{width:270, height:270, borderWidth:3, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderColor: 'pink' }}>
                <Image
                    source={{uri:'data:image/jpeg;base64,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'}}
                    style={{ width: 220, height: 200 }}
                />
                </View>

                <Text style={{ fontSize: 24, marginTop: 20 }}>{this.formatarTempo()}</Text>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Icon
                        raised
                        name={this.state.cronometroAtivo ? 'pause' : 'play-arrow'}
                        type='material'
                        color='maroon'
                        onPress={this.iniciarCronometro}
                    />
                    <Icon
                        raised
                        name='refresh'
                        type='material'
                        color='maroon'
                        onPress={this.reiniciarCronometro}
                    />
                </View>
                <Text>Último tempo medido: {this.state.ultimoTempoMedido}</Text>
            </View>
        );
    }
}

export default Cronometro;
