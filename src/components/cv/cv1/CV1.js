import React from 'react';
import Avatar from './Avatar';
import Info from './Info';
import ContentItem from './ContentItem';
import SkillItem from './SkillItem';
import "./stylecv1.css";
// import callApi from '../../../utils/apiCaller';

class CV1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "Liên Chiểu, Đà Nẵng",
      avatar: "https://res.cloudinary.com/pikann22/image/upload/v1615044354/toptimviec/TCM27Jw1N8ESc1V0Z3gfriuG1NjS_hXXIww7st_jZ0bFz3xGRjKht7JXzfLoU_ZelO4KPiYFPi-ZBVZcR8wdQXYHnwL5SDFYu1Yf7UBT4jhd9d8gj0lCFBA5VbeVp9SveFfJVKRcLON-OyFX_kxrs3f.png",
      content: [
        {
          content: [
            {
              detail: "Là người có tư duy logic và khả năng sáng tạo tốt, tôi mong muốn trở thành một trong những lập trình viên chủ chốt của công ty để mang lại những giải pháp công nghệ tối ưu cho khách hàng. Đồng thời, tôi muốn được nâng cao trình độ chuyên môn và năng lực nghề nghiệp thông qua môi trường làm việc chuyên nghiệp của công ty.",
              position: "",
              time: "",
              title: ""
            }
          ],
          title: "MỤC TIÊU NGHỀ NGHIỆP"
        },
        {
          content: [
            {
              detail: "",
              position: "Chuyên ngành: Công nghệ thông tin",
              time: "1/2010 - 1/2014",
              title: "Truong THPT PPT"
            },
            {
              detail: "",
              position: "Chuyên ngành: Công nghệ thông tin",
              time: "1/2010 - 1/2014",
              title: "ĐẠI HỌC BÁCH KHOA"
            }
          ],
          title: "HỌC VẤN"
        },
        {
          content: [
            {
              detail: "- UX/ UI Direction\n- Xây dựng các ứng dụng web\n- Xây dựng ứng dụng mobile",
              position: "Product Developer",
              time: "01/2015 - HIỆN TẠI",
              title: "CÔNG TY TOPTIMVIEC"
            }
          ],
          title: "KINH NGHIỆM LÀM VIỆC"
        },
        {
          content: [
            {
              detail: "Tham gia các cuộc thi Coding Contest, xây dựng một số sản phẩm phục vụ Coding Contest",
              position: "Thành viên",
              time: "01/2013 - 01/2014",
              title: "CÂU LẠC BỘ TIMTIMVIEC"
            }
          ],
          title: "HOẠT ĐỘNG"
        },
        {
          content: [
            {
              detail: "",
              position: "",
              time: "2013",
              title: "GIẢI NHẤT TÀI NĂNG TOPTIMVIEC"
            }
          ],
          title: "CHỨNG CHỈ"
        },
        {
          content: [
            {
              detail: "",
              position: "",
              time: "2014",
              title: "NHÂN VIÊN XUẤT SẮC NĂM CÔNG TY TOPTIMVIEC"
            }
          ],
          title: "GIẢI THƯỞNG"
        }
      ],
      dob: "10/10/1999",
      email: "abc@gmail.com",
      gender: false,
      hashtag: [
        "AngularJS",
        "QA QC",
        "Networking",
        "C#",
        "Fresher"
      ],
      interests: [
        "Chơi game",
        "Đọc truyện"
      ],
      name: "Nguyễn Văn A",
      phone: "0123456789",
      place: "Hà Nội",
      position: "Developer",
      skill: [
        {
          rate: 3,
          skill: "AngularJS"
        },
        {
          rate: 4,
          skill: "QA QC"
        },
        {
          rate: 1,
          skill: "Networking"
        },
        {
          rate: 1,
          skill: "C#"
        },
        {
          rate: 3,
          skill: "Fresher"
        }
      ]
    }
  }


  componentDidMount() {
    if (this.props.data) {
      this.setState(this.props.data);
    }
  }

  onChangeAvatarInfo = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  onChangeContent = (name, value, indexItem, indexdetail) => {
    this.setState({
      content: this.state.content.map((contentItem, index) => {
        return index === indexItem ? {
          ...contentItem, content: this.state.content[index].content.map((contentDetail, index) => {
            return index === indexdetail ? {
              ...contentDetail, [name]: value
            } : contentDetail;
          })
        } : contentItem;
      })
    })
  }

  onChangeSkill = (name, value, indexItem) => {
    this.setState({
      skill: this.state.skill.map((skillItem, index) => {
        return index === indexItem ? {
          ...skillItem, [name]: value
        } : skillItem;
      })
    })
  }

  onChangeInterest = (e) => {
    var indexItem = parseInt(e.target.getAttribute("index"));
    var value = e.currentTarget.textContent;
    this.setState({
      interests: this.state.interests.map((interest, index) => {
        return index === indexItem ? value : interest;
      })
    })
  }


  onClickToolBarDetail = (name, index, indexDetail) => {
    var contents = this.state.content;
    var contentItem = contents[index].content;
    var temp = contentItem[indexDetail];
    switch (name) {
      case 'up': {
        if (indexDetail > 0) {
          contentItem[indexDetail] = contentItem[indexDetail - 1];
          contentItem[indexDetail - 1] = temp;
        }
        break;
      }
      case 'down': {
        if (indexDetail < contentItem.length - 1) {
          contentItem[indexDetail] = contentItem[indexDetail + 1];
          contentItem[indexDetail + 1] = temp;
        }
        break;
      }
      case 'create': {
        contentItem.splice(indexDetail, 0, temp);
        break;
      }
      case 'delete': {
        contentItem.splice(indexDetail, 1)
        break;
      }
      default:
    }
    contents[index].content = contentItem;
    this.setState({ content: contents })
  }

  onChangeContentTitle = (value, indexItem) => {
    this.setState({
      content: this.state.content.map((contentItem, index) => {
        return index === indexItem ? {
          ...contentItem, title: value
        } : contentItem;
      })
    })
  }

  onClickToolBarItem = (name, index, itemName) => {
    var item = this.state.content;
    if (itemName === 'skill') item = this.state.skill;
    if (itemName === 'interest') item = this.state.interests;
    var temp = item[index];
    switch (name) {
      case 'up': {
        if (index > 0) {
          item[index] = item[index - 1];
          item[index - 1] = temp;
        }
        break;
      }
      case 'down': {
        if (index < item.length - 1) {
          item[index] = item[index + 1];
          item[index + 1] = temp;
        }
        break;
      }
      case 'create': {
        item.splice(index, 0, temp);
        break;
      }
      case 'delete': {
        item.splice(index, 1);
        break;
      }
      default:
    }
    this.setState({ itemName: item })
  }

  onChangeImage = (url) => {
    this.setState({ avatar: url });
  }

  render() {
    if (this.props.onChangeState) this.props.onChangeState(this.state);
    var { address, avatar, content, dob, email, gender, interests, name, phone, position, skill } = this.state;
    return (
      <div>
        <div className="row wrapper">
          <div className="col col-8 main-wrapper">

            {this.showContentItem(content)}

            {this.showSkillItem(skill)}
          </div>{/*//main-body*/}
          <div className="col col-4 sidebar-wrapper">
            <Avatar edit={this.props.edit}
              avatar={avatar}
              name={name}
              position={position}
              onChange={this.onChangeAvatarInfo}
              onChangeImage={this.onChangeImage}
            />
            <Info edit={this.props.edit}
              email={email}
              phone={phone}
              dob={dob}
              gender={gender}
              address={address}
              onChangeInfo={this.onChangeAvatarInfo}
            />
            {this.showInterestItem(interests)}
          </div>{/*//sidebar-wrapper*/}
        </div>
      </div>
    );
  }

  showContentItem = (contents) => {
    var result = null;
    if (contents.length > 0) {
      result = contents.map((contentItem, index) => {
        return (
          <ContentItem key={index}
            edit={this.props.edit}
            content={contentItem.content}
            title={contentItem.title}
            indexItem={index}
            onChangeContent={this.onChangeContent}
            onChangeContentTitle={this.onChangeContentTitle}
            onClickToolBarItem={this.onClickToolBarItem}
            onClickToolBarDetail={this.onClickToolBarDetail}
          />
        )
      })
    }
    return result;
  }

  showSkillItem = (skills) => {
    if (skills.length > 0) {
      var result = skills.map((skill, index) => {
        return (
          <SkillItem key={index}
            edit={this.props.edit}
            skill={skill}
            index={index}
            onChangeTitleSkill={this.onChangeSkill}
            onChangeLevelSkill={this.onChangeSkill}
            onClickToolBarSkill={this.onClickToolBarItem}
          />
        )
      })
      return (
        <div>
          <section className="skills-section section">
            <h2 className="section-title">Skills</h2>
            <div className="skillset">
              {result}
            </div>
          </section>
        </div >
      )
    }
    return null;
  }

  showInterestItem = (interests) => {
    if (interests.length > 0) {
      var result = interests.map((interest, index) => {
        return (
          <li key={index}>
            <p suppressContentEditableWarning contentEditable={this.props.edit} onBlur={this.onChangeInterest} index={index}>{interest}</p>
          </li>
        )
      })
      return (
        <div className="interests-container container-block">
          <h2 className="container-block-title">Interests</h2>
          <ul className="list-unstyled interests-list">
            {result}
          </ul>
        </div>
      )
    }
    return null;
  }

}

export default CV1;