import faker from 'faker';
import { sample } from 'lodash';
import { mock, Random } from 'mockjs';

// ----------------------------------------------------------------------

window.Random = Random;
const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  // 值班班组
  company: '超级班组',
  // 故障时间
  time: mock('@datetime'),
  // 线路编号
  lineNo: Random.natural(100000, 90000),
  // 线路名称
  lineName: '线路: ' + mock('@word'),

  // 电压等级
  voltageGrade: Random.natural(1, 4),

  // 故障设备
  faultDevice: '设备: ' + mock('@word'),

  faultPart: '部位: ' + mock('@word'),

  // 故障原因分类
  faultReason: sample(['电缆端头', '电缆接头', '电缆本体', '引线', '其他']),

  faultReasonMark: mock('@csentence(10, 20)'),

  cost: mock('@sentence'),

  // person in charge
  pic: {
    name: mock('@cname'),
    avatar: `/showmumu/static/mock-images/avatars/avatar_${Random.natural(
      1,
      24,
    )}.jpg`,
  },
  status: Random.pick(['新', '已竣工', '待审批']),

  cover: `/showmumu/static/mock-images/covers/cover_${Random.natural(
    1,
    24,
  )}.jpg`,
}));

export default users;
