import faker from "faker";
import { sample } from "lodash";
import { mock, Random } from "mockjs";
// utils
import { mockImgAvatar } from "../utils/mockImages";

// ----------------------------------------------------------------------

window.Random = Random;
const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: mock("@cname"),
  company: "超级班组",
  isVerified: faker.datatype.boolean(),
  status: "" + Random.integer(15100000000, 15399999999),
  role: sample(["超级管理员", "班组成员", "组长"]),
  lastOnline: mock("@datetime"),
}));

export default users;
