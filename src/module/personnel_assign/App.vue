<template>
  <div class="assign">
    <v-nav></v-nav>
    <div class="page-container">
      <v-leftNav></v-leftNav>
      <div class="page-content-wrapper">
        <div class="page-content">
          <ul class="tab clear">
            <li class="list">
              <a href="javascript:;">Candidate&nbsp&nbsp</a>
            </li>
            <li class="list">
              <a href="candidate_talentPool.html">/ &nbspTalent Pool&nbsp&nbsp</a>
            </li>
            <li class="list">
              <a href="personnel_assign.html" class="active">/ &nbspSteve Jobs</a>
            </li>
          </ul>
          <!--内容-->
          <div class="assign_content">

            <!--<button type="button" class="close_btn btn blue" @click="log_close_btn" v-show="log_close">Close</button>-->
            <!--tab按钮-->
            <ul class="option_tab clear">
              <li class="option_list active">Management</li>
              <li class="option_list" ref="log">Log</li>
            </ul>
            <!--按钮下的内容 Management-->
            <div class="Management_box tab_content">
              <div class="per_infor clear">
                <ul class="left_infor">
                  <li class="left_list">
                    <span class="list_tag">First Name</span>
                    <p class="list_des" title="Steve">Steve</p>
                  </li>
                  <li class="left_list">
                    <span class="list_tag">Last Name</span>
                    <p class="list_des">Jobs</p>
                  </li>
                  <li class="left_list">
                    <span class="list_tag">Email</span>
                    <p class="list_des">steve.jobs@careerchina.com</p>
                  </li>
                </ul>
                <div class="rate_infor">
                  <span class="rate_number">4.5</span>
                  <span class="rate_tag">Comprehensive</span>
                </div>
                <div class="link_infor">
                  <button type="button" class="link_btn">Edit Talent Pool</button>
                  <button type="button" class="link_btn">Preview Resume</button>
                  <span class="infor_date">2017-7-19 17:23</span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="portlet light portlet-fit portlet-datatable bordered">
                    <div class="portlet-body">
                      <div class="table-container clear">
                        <div class="action clear">
                          <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="page"
                            :page-sizes="[5, 10, 15, 20]"
                            :page-size="10"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="100"  style="margin-top: 10px">
                          </el-pagination>
                          <div class="btn-add">
                            <button class="btn blue width250" ref="assign_btn" @click="assign_new">+ Assign to a new customer order</button>
                          </div>
                        </div>
                        <table class="table table-striped table-bordered table-hover table-checkable">
                          <thead>
                            <tr role="row" class="heading">
                              <th width="4%"></th>
                              <th width="12%">Order No</th>
                              <th width="13%">Customer</th>
                              <th width="13%">Assign Time</th>
                              <th width="12%">Assign Person</th>
                              <th width="18.2%">Newest Notes</th>
                              <th width="9%">Status</th>
                              <th width="18.8%">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <i class="read_icon" v-show="read"></i>
                                <i class="unread_icon" v-show="unread" @click="unRead"></i>
                              </td>
                              <td>ABC10000000</td>
                              <td>First Leap 总部</td>
                              <td>2017/4/12 16:34</td>
                              <td>Maggie Ran</td>
                              <td>Assigned Notes Assiged</td>
                              <td>
                                <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Assined</button>
                              </td>
                              <td>
                                <a href="javascript:;" class="btn blue width80" @click="Proceed">Proceed</a>
                                <a href="javascript:;" class="btn blue width80" @click="Withdraw">Withdraw</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i class="read_icon"></i>
                                <i class="unread_icon"></i>
                              </td>
                              <td>ABC10000000</td>
                              <td>First Leap 总部</td>
                              <td>2017/4/12 16:34</td>
                              <td>Maggie Ran</td>
                              <td>Assigned Notes Assiged</td>
                              <td>
                                <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Assined</button>
                              </td>
                              <td>
                                <a href="javascript:;" class="btn blue width80" @click="Proceed">Proceed</a>
                                <a href="javascript:;" class="btn blue width80" @click="Withdraw">Withdraw</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i class="read_icon"></i>
                                <i class="unread_icon"></i>
                              </td>
                              <td>ABC10000000</td>
                              <td>First Leap 总部</td>
                              <td>2017/4/12 16:34</td>
                              <td>Maggie Ran</td>
                              <td>Assigned Notes Assiged</td>
                              <td>
                                <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Assined</button>
                              </td>
                              <td>
                                <a href="javascript:;" class="btn blue width80" @click="Proceed">Proceed</a>
                                <a href="javascript:;" class="btn blue width80" @click="Withdraw">Withdraw</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i class="read_icon"></i>
                                <i class="unread_icon"></i>
                              </td>
                              <td>ABC10000000</td>
                              <td>First Leap 总部</td>
                              <td>2017/4/12 16:34</td>
                              <td>Maggie Ran</td>
                              <td>Assigned Notes Assiged</td>
                              <td>
                                <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Assined</button>
                              </td>
                              <td>
                                <a href="javascript:;" class="btn blue width80" @click="Proceed">Proceed</a>
                                <a href="javascript:;" class="btn blue width80" @click="Withdraw">Withdraw</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i class="read_icon"></i>
                                <i class="unread_icon"></i>
                              </td>
                              <td>ABC10000000</td>
                              <td>First Leap 总部</td>
                              <td>2017/4/12 16:34</td>
                              <td>Maggie Ran</td>
                              <td>Assigned Notes Assiged</td>
                              <td>
                                <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Assined</button>
                              </td>
                              <td>
                                <a href="javascript:;" class="btn blue width80" @click="Proceed">Proceed</a>
                                <a href="javascript:;" class="btn blue width80" @click="Withdraw">Withdraw</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i class="read_icon"></i>
                                <i class="unread_icon"></i>
                              </td>
                              <td>ABC10000000</td>
                              <td>First Leap 总部</td>
                              <td>2017/4/12 16:34</td>
                              <td>Maggie Ran</td>
                              <td>Assigned Notes Assiged</td>
                              <td>
                                <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Assined</button>
                              </td>
                              <td>
                                <a href="javascript:;" class="btn blue width80" @click="Proceed">Proceed</a>
                                <a href="javascript:;" class="btn blue width80" @click="Withdraw">Withdraw</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i class="read_icon"></i>
                                <i class="unread_icon"></i>
                              </td>
                              <td>ABC10000000</td>
                              <td>First Leap 总部</td>
                              <td>2017/4/12 16:34</td>
                              <td>Maggie Ran</td>
                              <td>Assigned Notes Assiged</td>
                              <td>
                                <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Assined</button>
                              </td>
                              <td>
                                <a href="javascript:;" class="btn blue width80" @click="Proceed">Proceed</a>
                                <a href="javascript:;" class="btn blue width80" @click="Withdraw">Withdraw</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i class="read_icon"></i>
                                <i class="unread_icon"></i>
                              </td>
                              <td>ABC10000000</td>
                              <td>First Leap 总部</td>
                              <td>2017/4/12 16:34</td>
                              <td>Maggie Ran</td>
                              <td>Assigned Notes Assiged</td>
                              <td>
                                <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Assined</button>
                              </td>
                              <td>
                                <a href="javascript:;" class="btn blue width80" @click="Proceed">Proceed</a>
                                <a href="javascript:;" class="btn blue width80" @click="Withdraw">Withdraw</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i class="read_icon"></i>
                                <i class="unread_icon"></i>
                              </td>
                              <td>ABC10000000</td>
                              <td>First Leap 总部</td>
                              <td>2017/4/12 16:34</td>
                              <td>Maggie Ran</td>
                              <td>Assigned Notes Assiged</td>
                              <td>
                                <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Assined</button>
                              </td>
                              <td>
                                <a href="javascript:;" class="btn blue width80" @click="Proceed">Proceed</a>
                                <a href="javascript:;" class="btn blue width80" @click="Withdraw">Withdraw</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <el-pagination
                          @size-change="handleSizeChange"
                          @current-change="handleCurrentChange"
                          :current-page="page"
                          :page-sizes="[5, 10, 15, 20]"
                          :page-size="10"
                          layout="total, sizes, prev, pager, next, jumper"
                          :total="100">
                        </el-pagination>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="close_mask" v-show="close_mask">
                  <div class="mask_con">
                    <i class="icon-close"></i>
                    <p class="mask_con_des">This candidate has been closed.</p>
                    <button class="btn blue width220" @click="active_again">Active the candidate again</button>
                  </div>
                </div>
              </div>
              <button type="button" class="close_btn btn blue" @click="close" v-show="assign_close">Close</button>
            </div>
            <!--按钮下的内容 log-->
            <div class="log_box tab_content">
              <div class="portlet-body">
                <div class="table-container clear">
                  <div class="action clear" style="margin-top: 30px">
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="page"
                      :page-sizes="[5, 10, 15, 20]"
                      :page-size="10"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="100"  style="margin-top: 10px">
                    </el-pagination>
                  </div>
                  <table class="table table-striped table-bordered table-hover table-checkable">
                    <thead>
                      <tr role="row" class="heading">
                        <th width="17%">Order No</th>
                        <th width="33%">Customer</th>
                        <th width="13%">Time</th>
                        <th width="28%">Notes</th>
                        <th width="9%">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>ABC10000000</td>
                        <td>First Leap 总部</td>
                        <td>2017/4/12 16:34</td>
                        <td>Assigned Notes Assiged Notes</td>
                        <td>
                          <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Assined</button>
                        </td>
                      </tr>
                      <tr>
                        <td>ABC10000000</td>
                        <td>First Leap 总部</td>
                        <td>2017/4/12 16:34</td>
                        <td>Assigned Notes Assiged Notes</td>
                        <td>
                          <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Assined</button>
                        </td>
                      </tr>
                      <tr>
                        <td>ABC10000000</td>
                        <td>First Leap 总部</td>
                        <td>2017/4/12 16:34</td>
                        <td>Assigned Notes Assiged Notes</td>
                        <td>
                          <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Assined</button>
                        </td>
                      </tr>
                      <tr>
                        <td>ABC10000000</td>
                        <td>First Leap 总部</td>
                        <td>2017/4/12 16:34</td>
                        <td>Assigned Notes Assiged Notes</td>
                        <td>
                          <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Assined</button>
                        </td>
                      </tr>
                      <tr>
                        <td>ABC10000000</td>
                        <td>First Leap 总部</td>
                        <td>2017/4/12 16:34</td>
                        <td>Assigned Notes Assiged Notes</td>
                        <td>
                          <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Assined</button>
                        </td>
                      </tr>
                      <tr>
                        <td>ABC10000000</td>
                        <td>First Leap 总部</td>
                        <td>2017/4/12 16:34</td>
                        <td>Assigned Notes Assiged Notes</td>
                        <td>
                          <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Assined</button>
                        </td>
                      </tr>
                      <tr>
                        <td>ABC10000000</td>
                        <td>First Leap 总部</td>
                        <td>2017/4/12 16:34</td>
                        <td>Assigned Notes Assiged Notes</td>
                        <td>
                          <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Assined</button>
                        </td>
                      </tr>
                      <tr>
                        <td>ABC10000000</td>
                        <td>First Leap 总部</td>
                        <td>2017/4/12 16:34</td>
                        <td>Assigned Notes Assiged Notes</td>
                        <td>
                          <button class="btn btn-success mt-ladda-btn ladda-button btn-circle">Assined</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="page"
                    :page-sizes="[5, 10, 15, 20]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="100">
                  </el-pagination>
                </div>
              </div>
              <div class="close_mask" v-show="log_close_mask">
                <div class="mask_con">
                  <i class="icon-close"></i>
                  <p class="mask_con_des">This candidate has been closed.</p>
                  <button class="btn blue width220" @click="log_active_again">Active the candidate again</button>
                </div>
              </div>
              <button type="button" class="close_btn btn blue" @click="log_close" v-show="log_assign_close" style="top: -64px;">Close</button>
            </div>
          </div>
          <!--添加新的assign表格框-->
          <div class="assign_popup" v-show="assign_popup">
            <span class="assign_tag">
              Assign the candidate to new customer order
              <i class="icon-close" @click="new_assign_cancel"></i>
            </span>
            <div class="portlet-body-clone">
              <div class="table-container clear">
                <table class="table table-striped table-bordered table-hover table-checkable">
                  <thead>
                    <tr role="row" class="heading">
                      <th width="5%"></th>
                      <th width="16%">Order No</th>
                      <th width="25%">Customer</th>
                      <th width="10%">Demand</th>
                      <th width="13%">Deadline</th>
                      <th width="10%">Priority</th>
                      <th width="13%">Processing</th>
                      <th width="8%">Visa</th>
                    </tr>
                    <tr role="row" class="filter">
                      <td>
                      </td>
                      <td>
                        <input type="text" class="form-control form-filter input-sm" name="order_id">
                      </td>
                      <td>
                        <input type="text" class="form-control form-filter input-sm" name="order_id">
                      </td>
                      <td>
                        <input type="text" class="form-control form-filter input-sm" name="order_id">
                      </td>
                      <td>
                        <input type="text" class="form-control form-filter input-sm" name="order_id">
                      </td>
                      <td>
                        <select name="" id="pri_sele" class="form-control">
                          <option value=""></option>
                          <option value="Invisible">Medium</option>
                          <option value="Visible">Medium</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" class="form-control form-filter input-sm" name="order_id">
                      </td>
                      <td>
                        <input type="text" class="form-control form-filter input-sm" name="order_id">
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" class="form-control check_input" name="assign_check" v-model="assign_checkArr" value="1">
                      </td>
                      <td>ABC10000000</td>
                      <td>First Leap 总部</td>
                      <td>5</td>
                      <td>2017/4/12 16:34</td>
                      <td>Medium</td>
                      <td>5</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" class="form-control check_input" name="assign_check" v-model="assign_checkArr" value="2">
                      </td>
                      <td>ABC10000000</td>
                      <td>First Leap 总部</td>
                      <td>5</td>
                      <td>2017/4/12 16:34</td>
                      <td>Medium</td>
                      <td>5</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" class="form-control check_input" name="assign_check" v-model="assign_checkArr" value="3">
                      </td>
                      <td>ABC10000000</td>
                      <td>First Leap 总部</td>
                      <td>5</td>
                      <td>2017/4/12 16:34</td>
                      <td>Medium</td>
                      <td>5</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" class="form-control check_input" name="assign_check" v-model="assign_checkArr" value="4">
                      </td>
                      <td>ABC10000000</td>
                      <td>First Leap 总部</td>
                      <td>5</td>
                      <td>2017/4/12 16:34</td>
                      <td>Medium</td>
                      <td>5</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" class="form-control check_input" name="assign_check" v-model="assign_checkArr" value="5">
                      </td>
                      <td>ABC10000000</td>
                      <td>First Leap 总部</td>
                      <td>5</td>
                      <td>2017/4/12 16:34</td>
                      <td>Medium</td>
                      <td>5</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" class="form-control check_input" name="assign_check" v-model="assign_checkArr" value="6">
                      </td>
                      <td>ABC10000000</td>
                      <td>First Leap 总部</td>
                      <td>5</td>
                      <td>2017/4/12 16:34</td>
                      <td>Medium</td>
                      <td>5</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" class="form-control check_input" name="assign_check" v-model="assign_checkArr" value="7">
                      </td>
                      <td>ABC10000000</td>
                      <td>First Leap 总部</td>
                      <td>5</td>
                      <td>2017/4/12 16:34</td>
                      <td>Medium</td>
                      <td>5</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" class="form-control check_input" name="assign_check" v-model="assign_checkArr" value="8">
                      </td>
                      <td>ABC10000000</td>
                      <td>First Leap 总部</td>
                      <td>5</td>
                      <td>2017/4/12 16:34</td>
                      <td>Medium</td>
                      <td>5</td>
                      <td>5</td>
                    </tr>
                  </tbody>
                </table>
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="page"
                  :page-sizes="[5, 10, 15, 20]"
                  :page-size="10"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="100">
                </el-pagination>
              </div>
              <div class="notesBox">
                <span class="note_tag">Assigning Notes</span>
                <textarea name="note_text" id="notes" cols="30" rows="10" class="form-control" v-model="assign_notes"></textarea>
              </div>
            </div>
            <div class="assign_popup_bottom">
              <div class="buttons">
                <button type="button" class="btn grey-salsa btn-outline width120" @click="new_assign_cancel">Cancel</button>
                <button type="submit" class="btn blue width120" @click="new_assign_sub">Assign</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" v-show="mask"></div>
    <div class="popup" v-show="withdraw_popup">
      <span class="popup_tag">
        Withdraw
        <i class="icon-close" @click="withdraw_cancel"></i>
      </span>
      <div class="popup_con">
        <p class="popup_des">
          The candidate has been assigned to the customer.<br/>
          Are you sure to withdraw that?
        </p>
        <textarea name="" id="" cols="30" rows="10" v-model="textareaVal" placeholder="Withdraw Notes..." autofocus></textarea>
        <div class="place_enter" v-if="enter">
          <span class="enter_tag">
            <b>*</b>
            Please enter ”Delete”
          </span>
          <input type="text" class="form-control enter_input" v-model="wit_enter_val" @focus="wit_input">
          <span class="error_word" v-show="wit_error">Please enter "Delete"</span>
        </div>
        <div class="buttons">
          <button type="button" class="btn grey-salsa btn-outline width120" @click="withdraw_cancel">Cancel</button>
          <button type="submit" class="btn blue width120" @click="withdraw_confirm">Confirm</button>
        </div>
      </div>
    </div>
    <div class="popup" v-show="proceed_popup">
      <span class="popup_tag">
        Proceed
        <i class="icon-close" @click="proceed_cancel"></i>
      </span>
      <div class="popup_con">
        <p class="popup_des">
          The candidate has been acceptted by the customer.<br/>
          If you proceed to visa, all other assignings will be withdrew.<br/>
          Are you sure to?
        </p>
        <div class="place_enter" style="margin-top: 30px">
          <span class="enter_tag">
            <b>*</b>
            Please enter ”Delete”
          </span>
          <input type="text" class="form-control enter_input" v-model="pro_enter_val" autofocus @focus="pro_input">
          <span class="error_word" v-show="pro_error">Please enter "Delete"</span>
        </div>
        <div class="buttons">
          <button type="button" class="btn grey-salsa btn-outline width120" @click="proceed_cancel">Cancel</button>
          <button type="submit" class="btn blue width120" @click="proceed_confirm">Confirm</button>
        </div>
      </div>
    </div>
    <div class="popup" v-show="close_popup">
      <span class="popup_tag">
        Close Candidate
        <i class="icon-close" @click="close_cancel"></i>
      </span>
      <div class="popup_con">
        <p class="popup_des">
          All assign will be withdrew. <br/>
          Are you sure to close this candidate?
        </p>
        <div class="place_enter" style="margin-top: 30px">
          <span class="enter_tag">
            <b>*</b>
            Please enter ”Delete”
          </span>
          <input type="text" class="form-control enter_input" v-model="close_enter_val" autofocus @focus="close_input">
          <span class="error_word" v-show="close_error">Please enter "Delete"</span>
        </div>
        <div class="buttons">
          <button type="button" class="btn grey-salsa btn-outline width120" @click="close_cancel">Cancel</button>
          <button type="submit" class="btn blue width120" @click="close_confirm">Confirm</button>
        </div>
      </div>
    </div>
    <div class="popup" v-show="log_close_popup">
      <span class="popup_tag">
        Close Candidate
        <i class="icon-close" @click="log_close_cancel"></i>
      </span>
      <div class="popup_con">
        <p class="popup_des">
          All assign will be withdrew. <br/>
          Are you sure to close this candidate?
        </p>
        <div class="place_enter" style="margin-top: 30px">
          <span class="enter_tag">
            <b>*</b>
            Please enter ”Delete”
          </span>
          <input type="text" class="form-control enter_input" v-model="log_close_enter_val" autofocus @focus="log_close_input">
          <span class="error_word" v-show="log_close_error">Please enter "Delete"</span>
        </div>
        <div class="buttons">
          <button type="button" class="btn grey-salsa btn-outline width120" @click="log_close_cancel">Cancel</button>
          <button type="submit" class="btn blue width120" @click="log_close_confirm">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import '../../common/css/reset.min.css'
  import nav from '../../components/nav.vue'
  import leftNav from '../../components/leftNav.vue'
  export default{
    data(){
      return{
        page:1,
        unread:true,
        read:false,
        mask:false,
        withdraw_popup:false,
        textareaVal:'',
        enter:true,
        wit_enter_val:'',
        wit_error:false,
        proceed_popup:false,
        pro_enter_val:'',
        pro_error:false,
        close_popup:false,
        close_enter_val:'',
        close_error:false,
        close_mask:false,
        assign_close:true,
        assign_popup:false,
        assign_notes:'',
        assign_checkArr:[],
        log_close_mask:false,
        log_assign_close:true,
        log_close_popup:false,
        log_close_enter_val:'',
        log_close_error:false
      }
    },
    components: {
      'v-nav': nav,
      'v-leftNav': leftNav,
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      unRead(){
        this.unread=false;
        this.read=true
      },
      Withdraw(){
        this.mask=true;
        this.withdraw_popup=true
      },
      withdraw_cancel(){
        this.mask=false;
        this.withdraw_popup=false;
        this.textareaVal='';
        this.wit_enter_val=''
      },
      withdraw_confirm(){
        if(this.enter === true){
          if(this.wit_enter_val!='Delete'){
            this.wit_error=true
          }else {
            this.mask=false;
            this.withdraw_popup=false;
            this.textareaVal='';
            this.wit_enter_val='';
            this.wit_error=false
          }
        }else {
          this.mask=false;
          this.withdraw_popup=false;
          this.textareaVal='';
          this.wit_enter_val=''
        }
      },
      wit_input(){
        this.wit_error=false
      },
      Proceed(){
        this.mask=true;
        this.proceed_popup=true
      },
      proceed_cancel(){
        this.mask=false;
        this.proceed_popup=false;
        this.pro_enter_val=''
      },
      proceed_confirm(){
        if(this.pro_enter_val!='Delete'){
          this.pro_error=true
        }else {
          this.mask=false;
          this.proceed_popup=false;
          this.pro_enter_val='';
          this.pro_error=false
        }
      },
      pro_input(){
        this.pro_error=false
      },
      close(){
        this.mask=true;
        this.close_popup=true
      },
      close_cancel(){
        this.mask=false;
        this.close_popup=false;
        this.close_enter_val=''
      },
      close_confirm(){
        if(this.close_enter_val != 'Delete'){
            console.log('1111')
          this.close_error=true;
        }else {
          this.mask=false;
          this.close_popup=false;
          this.close_enter_val='';
          this.close_error=false;
          this.close_mask=true;
          this.$refs.assign_btn.style.backgroundColor='#C5C5C5';
          this.assign_close=false;
        }
      },
      close_input(){
        this.close_error=false;
      },

      active_again(){
        this.close_mask=false;
        this.$refs.assign_btn.style.backgroundColor='#3598dc';
        this.assign_close=true;
      },
      assign_new(){
        this.mask=true;
        this.assign_popup=true
      },
      new_assign_cancel(){
        this.mask=false;
        this.assign_popup=false;
        this.assign_notes='';
        this.assign_checkArr=[]
      },
      new_assign_sub(){
        this.mask=false;
        this.assign_popup=false;
        this.assign_notes='';
        this.assign_checkArr=[]
      },

      log_close(){
        this.mask=true;
        this.log_close_popup=true
      },
      log_close_cancel(){
        this.mask=false;
        this.log_close_popup=false;
        this.log_close_enter_val=''
      },
      log_close_confirm(){
        if(this.log_close_enter_val != 'Delete'){
          this.log_close_error=true;
        }else {
          this.mask=false;
          this.log_close_popup=false;
          this.log_close_enter_val='';
          this.log_close_error=false;
          this.log_close_mask=true;
          this.log_assign_close=false;
        }
      },
      log_close_input(){
        this.log_close_error=false;
      },
      log_active_again(){
        this.log_close_mask=false;
        this.log_assign_close=true;
      },
    },
    mounted(){
      $('.option_tab li').click(function () {
        $('.option_tab li').eq($(this).index()).addClass("active").siblings().removeClass('active');
        $(".tab_content").hide().eq($(this).index()).show();
      });
    }
  }
</script>

<style scoped>
  .page-content{
    position: relative;
  }
  .page-content .tab {
    padding-bottom: 20px;
    border-bottom: 1px solid #e7ecf1 !important;
    margin-bottom: 12px;
  }
  .page-content .tab .list {
    float: left;
  }
  .page-content .tab .list a {
    font-size: 14px;
    color: #283644;
    letter-spacing: 0;
    line-height: 14px;
  }
  .page-content .tab .list .active {
    color: #99A9BF;
  }
  thead {
    background: #F9FAFC;
  }
  .table-striped > tbody > tr:nth-of-type(odd) {
    background: #fff !important;
  }
  .portlet.light.bordered{
    border: none !important;
  }
  .portlet.bordered{
    border-left: none !important;
  }

  .assign_content{
    max-width: 1000px;
    position: relative;
    margin: 25px auto;
    padding-bottom: 50px;
  }
  .assign_content .option_tab{
    border-bottom: 1px solid #E6ECF2;
  }
  .assign_content .option_tab .option_list{
    float: left;
    font-size: 14px;
    color: #8492A6;
    padding: 15px 15px 12px 15px;
    cursor: pointer;
  }
  .assign_content .option_tab .active{
    color: #4C9DFF;
    border-bottom: 3px solid #4C9DFF;
  }
  .assign_content .close_btn{
    position: absolute;
    width: 60px;
    height: 26px;
    top:-84px;
    right:0;
    line-height: 14px;
    border-radius: 2px !important;
  }
  .row{
    position: relative;
  }
  .close_mask{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    z-index: 100;
  }
  .close_mask .mask_con{
    position: absolute;
    top:50%;
    left: 50%;
    width: 304px;
    height: 174px;
    margin-top: -87px;
    margin-left: -152px;
    z-index: 120;
  }
  .close_mask .mask_con .icon-close{
    text-align: center;
    display: block;
    font-size: 50px;
    color: #fff;
  }
  .close_mask .mask_con .mask_con_des{
    margin: 30px 0;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
  }
  .close_mask .mask_con .width220{
    display: block;
    margin: auto;
    width: 220px;
    height: 44px;
    border-radius: 2px !important;
  }
  .el-pagination {
    float: left;
  }
  .btn-add {
    float: right;
    width: 250px;
  }
  .per_infor{
    width: 1000px;
    padding: 40px 50px 16px 50px;
    background: #3F3F3F;
    margin: 50px 0;
  }
  .per_infor .left_infor{
    float: left;
    margin: 10px 50px 0 0;
  }
  .per_infor .left_infor .left_list{
    margin-bottom: 10px;
    font-size: 0;
  }
  .per_infor .left_infor .left_list .list_tag{
    display: inline-block;
    margin-right: 30px;
    width: 75px;
    opacity: 0.6;
    filter:alpha(opacity=60);
    font-size: 14px;
    color: #FFFFFF;
    text-align: -webkit-right;
    vertical-align: top;
  }
  .per_infor .left_infor .left_list .list_des{
    display: inline-block;
    width: 308px;
    font-size: 14px;
    color: #FFFFFF;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .per_infor .rate_infor{
    width: 210px;
    float: left;
    border-left: 2px solid rgba(255,255,255,.2);
    border-right: 2px solid rgba(255,255,255,.2);
  }
  .per_infor .rate_infor .rate_number{
    display: block;
    margin: 15px 0 8px 0;
    font-size: 30px;
    color: #F7BA2A;
    text-align: center;
  }
  .per_infor .rate_infor .rate_tag{
    display: block;
    font-size: 14px;
    color: #FFFFFF;
    text-align: center;
  }
  .per_infor .link_infor{
    width: 180px;
    float: right;
  }
  .per_infor .link_infor .link_btn{
    display: block;
    margin-bottom: 14px;
    width: 100%;
    height: 44px;
    line-height: 44px;
    border: 1px solid rgba(255,255,255,.4);
    border-radius: 2px;
    font-size: 14px;
    color: #FFFFFF;
    text-align: center;
    cursor: pointer;
    background: transparent;
  }
  .per_infor .link_infor .infor_date{
    display: block;
    font-size: 10px;
    color: rgba(255,255,255,.4);
    text-align: center;
  }
  .portlet-body{
    padding: 0 !important;
  }
  tbody tr td{
    height: 60px;
    /*line-height: 60px !important;*/
  }
  .read_icon,.unread_icon{
    display: block;
    margin: auto;
    width: 17px;
    cursor: pointer;
  }
  .read_icon{
    height: 16px;
    background: url("../../common/img/icon-read.png")no-repeat center;
    background-size: cover;
  }
  .unread_icon{
    height: 12px;
    background: url("../../common/img/icon-unread.png")no-repeat center;
    background-size: cover;
  }
  .width80{
    width: 80px;
    height: 26px;
    padding: 0 !important;
    border-radius: 2px !important;
    line-height: 26px !important;
  }
  .width250{
    width: 250px;
    height: 44px;
    border-radius: 2px !important;
    border: none !important;
  }
  .width80:last-child{
    margin-right: 0 !important;
  }
  .ladda-button{
    width: 70px !important;
    height: 26px !important;
    line-height: 14px !important;
    padding: 0 !important;
  }
  .action{
    margin-bottom: 20px;
  }
  .mask{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
    z-index: 99;
    overflow: hidden;
  }
  .popup{
    position: fixed;
    top:180px;
    left: 50%;
    margin-left: -270px;
    width: 540px;
    z-index: 110;
    background: #FFFFFF;
    border-radius: 4px !important;
  }
  .popup .popup_tag{
    position: relative;
    display: block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #F9FAFC;
    text-align: center;
    font-size: 16px;
    color: #283644;
  }
  .popup .popup_tag .icon-close{
    position: absolute;
    right: 10px;
    top: 18px;
    font-size: 24px;
    color: #CCCDCE;
    cursor: pointer;
  }
  .popup .popup_tag .icon-close:hover{
    color: #283644;
  }
  .popup .popup_con{
    padding: 50px 50px 30px 50px;
  }
  .popup .popup_con .popup_des{
    font-size: 16px;
    color: #283644;
    line-height: 30px;
    text-align: center;
  }
  .popup .popup_con textarea{
    display: block;
    padding: 13px 16px;
    margin: 30px 0;
    width: 100%;
    height: 100px;
    background: #FFFFFF;
    border: 1px solid #E6ECF2;
    border-radius: 4px !important;
    font-size: 14px;
    color: #283644;
  }
  .place_enter{
    position: relative;
    padding: 10px 20px;
    margin-bottom: 30px;
    width: 100%;
    height: 64px;
    background: #FAF1E9;
    border-radius: 4px !important;
  }
  .place_enter .error_word{
    position: absolute;
    bottom: -20px;
    right: 130px;
    font-size: 12px;
    color: #FC3A3A;
  }
  .place_enter .enter_tag{
    display: inline-block;
    margin-right: 22px;
    font-size: 14px;
    color: #283644;
    line-height: 44px;
  }
  .place_enter .enter_tag b{
    margin-right: 10px;
    color: #FC3A3A;
    vertical-align: middle;
  }
  .place_enter .enter_input{
    display: inline-block;
    width: 220px;
    height: 100%;
    padding: 10px;
    background: #FFFFFF;
    border-radius: 4px !important;
    border: none !important;
    font-size: 14px;
    color: #283644;
  }
  .buttons{
    text-align: center;
  }
  .buttons button{
    display: inline-block;
    margin-right: 16px;
    border-radius: 2px !important;
  }
  .buttons button:last-child{
    margin-right: 0;
  }
  .width120{
    width: 120px;
  }

  .assign_popup{
    position: absolute;
    top:0;
    left:15px;
    width: 920px;
    background: #FFFFFF;
    border-radius: 4px !important;
    z-index: 120;
  }
  .assign_popup .assign_tag{
    position: relative;
    display: block;
    height: 60px;
    width: 100%;
    background: #F9FAFC;
    text-align: center;
    line-height: 60px;
    font-size: 16px;
    color: #283644;
  }
  .assign_popup .assign_tag .icon-close{
    position: absolute;
    top:24px;
    right:18px;
    font-size: 24px;
    color: #CCCDCE;
    cursor: pointer;
  }
  .assign_popup .assign_tag .icon-close:hover{
    color: #283644;
  }
  .portlet-body-clone{
    padding: 30px 80px !important;
  }
  .check_input{
    width: 20px;
    height: 20px;
    display: block;
    margin: auto;
    cursor: pointer;
  }
  #pri_sele{
    height: 30px;
  }
  .notesBox{
    margin: 50px 0 20px 0;
  }
  .notesBox .note_tag{
    display: inline-block;
    margin-right: 16px;
    font-size: 14px;
    color: #979BA1;
    vertical-align: top;
  }
  .notesBox textarea{
    display: inline-block;
    width: 500px;
    height: 100px;
    padding: 10px;
    font-size: 14px;
    color: #283644;
  }
  .assign_popup_bottom{
    padding: 35px 0;
    width: 100%;
    height: 104px;
    background: #F9FAFC;
  }
  .Management_box{
    position: relative;
  }
  .log_box{
    position: relative;
    display: none;
  }
</style>
