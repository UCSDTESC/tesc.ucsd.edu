import React, {Component} from 'react';
import Airtable from '../../data/airtableConnection';

function Member(props) {
    return (
        <div className="col-md-3 d-flex p-3">
            <img className="img-responsive w-100 align-self-center justify-self-center" src={props.img.url}/>
        </div>
    )
}
class MembersPage extends Component {

    constructor(props) {
        super(props);
        this.base = Airtable.base('appFhSHX6s9v3csVC');
        this.state = {
            records: []
        }
    }

    componentWillMount() {
        this.base('Council Members')
            .select()
            .all()
            .then(records => records.map(r => r._rawJson.fields))
            .then(records => records.map(r => ({name: r.name, img: r.img[0]})))
            .then(records => this.setState({records}))
    }

    renderMembers() {
        return this.state.records.map(m => <Member {...m}/>)
    }

    render() {
        return (
            <>
            <section className="about">
                <div className="text-center about__header-red">
                    Members
                </div>
                <div className="text-center about__header">
                    Members of the Council
                </div>
                <div className="about__text mt-5 text-center">
                    <p className="about__copy">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed lacus aliquam, cursus lectus egestas, pretium eros. 
                    </p>
                </div>
                <div className="container">
                    <div className="row">
                    {this.renderMembers()}
                    </div>
                </div>
            </section>
            </>
        )
    }
}

export default MembersPage;