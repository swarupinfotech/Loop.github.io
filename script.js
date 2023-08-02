
  
  window.onload = () => {
    let box = document.querySelectorAll('.box');
    
    let j = 2;
    for(i=0; i<box.length; i++){
      box[i].style.animation = `box_visible .6s ease 1.${j}s 1 both , box_invisible .6s ease 7.${j}s 1 forwards`;
      j += 8;
    }
    
    box[7].style.animation =  'sml_box_visible .6s ease 1.8s 1 both , sml_box_invisible .6s ease 7.8s 1 forwards';
    box[16].style.animation =  'sml_box_visible .6s ease 2s 1 both , sml_box_invisible .6s ease 8s 1 forwards';
    box[1].style.animation = `box_visible .6s ease 1.${j}s 1 both , rte_180 .6s ease 3.8s 1 forwards , box_invisible .6s ease 7.${j}s 1 forwards`;
    box[3].style.animation = `box_visible .6s ease 1.${j}s 1 both , rte_90 .6s ease 2.8s 1 forwards , box_invisible .6s ease 7.${j}s 1 forwards`;
    box[4].style.animation = `box_visible .6s ease 1.${j}s 1 both , rte_180 .6s ease 3.2s 1 forwards , rte_270 .6s ease 3.8s 1 forwards , rte_360 .6s ease 4.4s 1 forwards , box_invisible .6s ease 7.${j}s 1 forwards`;
    box[9].style.animation = `box_visible .6s ease 1.${j}s 1 both , rte_270 .6s ease 4.4s 1 forwards , rte_360 .6s ease 5s 1 forwards , box_invisible .6s ease 7.${j}s 1 forwards`;
    box[11].style.animation = `box_visible .6s ease 1.${j}s 1 both , rte_90 .6s ease 3.8s 1 forwards , rte_180 .6s ease 4.4s 1 forwards , rte_270 .6s ease 5s 1 forwards , box_invisible .6s ease 7.${j}s 1 forwards`;
    box[14].style.animation = `box_visible .6s ease 1.${j}s 1 both , rte_180 .6s ease 5s 1 forwards , box_invisible .6s ease 7.${j}s 1 forwards`;
    box[17].style.animation = `box_visible .6s ease 1.${j}s 1 both , rte_90 .6s ease 5s 1 forwards , rte_180 .6s ease 5.6s 1 forwards , box_invisible .6s ease 7.${j}s 1 forwards`;
    
    let intro_container = document.querySelector('.intro_container');
    let container = document.querySelector('.container');
    let audio = document.querySelectorAll('.audio');
    let sound_cont = document.querySelector('.sound_cont');
    let sound = document.querySelectorAll('.sound');
    
    setTimeout(() => {
      sound_cont.style.display = 'flex';
    }, 9000);
    
    let btn = document.querySelectorAll('.btn');
    let intro_box = document.querySelectorAll('.intro_box');
    let cover = document.querySelectorAll('.cover');
    
    // Dynamic intro box value
    let a = [];
    
    let open_intro_box = (num) => {
      intro_box[num].style.display = 'block';
      intro_box[num].style.animation = 'box_open_anim .8s ease 0s 1 both';
      cover[num].style.display = 'block';
      a[num] = 1;
    }
    
    let close_intro_box = (num) => {
      intro_box[num].style.animation = 'box_close_anim .6s ease 0s 1 both';
      cover[num].style.display = 'none';
      setTimeout(() => {
        intro_box[num].style.display = 'block';
      }, 600);
      a[num] = 0;
      event.stopPropagation();
    }
    
    // How to play button
    btn[0].addEventListener('click', () => {
      open_intro_box(0);
      if(a[1] === 1){
        close_intro_box(1);
      }
    });
    
    cover[0].addEventListener('click', () => {
      close_intro_box(0);
    });
    
    // Settings button
    btn[2].addEventListener('click', () => {
      open_intro_box(1);
      if(a[0] === 1){
        close_intro_box(0);
      }
    });
    
    cover[1].addEventListener('click', () => {
      close_intro_box(1);
    });
    
    // Sound Setup
    let volume_cont = document.querySelectorAll('.volume_cont');
    let volume_value = [0,0];
    
    sound[0].addEventListener('click', () => {
      audio[0].play();
      volume_value[0] = 1;
      sound_cont.style.animation = 'sound_cont_done 1.2s ease 0s 1 both'
      setTimeout(() => {
        intro_container.style.display = 'none';
        container.style.display = 'block';
      }, 1400);
    });
    
    sound[1].addEventListener('click', () => {
      sound_cont.style.animation = 'sound_cont_done 1.2s ease 0s 1 both'
      setTimeout(() => {
        intro_container.style.display = 'none';
        container.style.display = 'block';
      }, 1400);
    });
    
    volume_cont[0].addEventListener('click', () => {
      volume_cont[1].style.display = 'block';
      volume_value[1] = 1;
      if(volume_value[0] == 1){
      audio[0].pause();
      }
    });
    
    volume_cont[1].addEventListener('click', () => {
      volume_cont[1].style.display = 'none';
      volume_value[1] = 0;
      audio[0].play();
    });
    
    // Play button
    let play_cont = document.querySelector('.play_cont');
    let lvl_cont = document.querySelectorAll('.lvl_cont');
    
    let goal_cont = document.querySelector('.goal_cont');
    let update_goal = document.querySelectorAll('.update_goal');
    
    btn[1].addEventListener('click', () => {
      btn[0].style.animation = 'btn_anim_gone 1.2s ease .4s 1 both';
      btn[1].style.animation = 'btn_anim_gone 1.2s ease .6s 1 both';
      btn[2].style.animation = 'btn_anim_gone 1.2s ease .2s 1 both';
      play_cont.style.animation = 'btn_anim_gone 1.2s ease .7s 1 both';
      lvl_cont[0].style.display = 'block';
      container.style.animation = 'auto_hide_floating_shape 1s ease 2s 1 both';
      setTimeout(() => {
        container.style.display = 'none';
        if(volume_value[1] == 0){
          audio[0].play();
        }
      }, 3000);
      if(a[0] === 1){
        close_intro_box(0);
      }
      if(a[1] === 1){
        close_intro_box(1);
      }
      // And here comes goal
      goal_cont.style.display = 'block';
      update_goal[0].style.display = 'block';
      goal_cont.style.animation = 'btn_anim_visible .6s ease 6s 1 both';
      update_goal[0].style.animation = 'new_goal .6s ease 7.2s 1 both';
    });
    
    
    // Level Setup
    
    let lvl_box = document.querySelectorAll('.lvl_box');
    
    let rotate_value = [];
    let v = [
      [0,0,0,180],
      [180,0,90,270,0,0],
      [0,90,270,90,270,180],
      [270,90,90,0,270,270,90],
      [180,180,270,270,180,180,90,180,270,270,90,90,0,270,0,0,90,90,0,0],
      [0,90,0,90,270,180,0,270,180,0,0,0,90,270,0,180,0,90,90,0,0],
      [180,90,0,90,0,0,0,270,90,180,180,0,270,0,90,0],
      [180,0,90,0,0,270,90,90,0,90,270,270,180,180,90,90,0,0,90,0]
    ];
    
    for(i=0; i<lvl_box.length; i++){
      rotate_value.push(0);
    }
    
    let rotate = (lvl,num_1,num_2) => {
      switch (rotate_value[num_1]) {
        case 0: lvl_box[num_1].style.animation = 'rte_90 .6s ease 0s 1 forwards';
        rotate_value[num_1] = 1;
        v[lvl][num_2] = 90;
        break;
        case 1: lvl_box[num_1].style.animation = 'rte_180 .6s ease 0s 1 forwards';
        rotate_value[num_1] = 2;
        v[lvl][num_2] = 180;
        break;
        case 2: lvl_box[num_1].style.animation = 'rte_270 .6s ease 0s 1 forwards';
        rotate_value[num_1] = 3;
        v[lvl][num_2] = 270;
        break;
        case 3: lvl_box[num_1].style.animation = 'rte_360 .6s ease 0s 1 forwards';
        rotate_value[num_1] = 0;
        v[lvl][num_2] = 0;
        break;
        default: alert('default');
      }
    }
    
    let shape_straight = document.querySelectorAll('.shape_straight');
    let shape = document.querySelectorAll('.shape');
    let lvl_cmplt_shape = document.querySelectorAll('.lvl_cmplt_shape');
    let lvl_cmplt_shape_straight = document.querySelectorAll('.lvl_cmplt_shape_straight');
    
    // 1st Level
    
    let complete_lvl_1 = () => {
      if(v[0][0] === 0 && v[0][1] === 90 && v[0][2] === 270 && v[0][3] === 180) {
        setTimeout(() => {
          for(i=0; i<=3;i++){
            lvl_cmplt_shape[i].style.display = 'block';
            lvl_cmplt_shape[i].style.animation = 'lvl_cmplt_shape 1.6s ease 0s 1 forwards';
            shape[i].style.animation = 'lvl_complete 2.2s ease 0s 1 forwards';
            update_goal[0].style.animation = 'old_goal .6s ease 2.2s 1 both';
            update_goal[1].style.display = 'block';
            update_goal[1].style.animation = 'new_goal .6s ease 2.6s 1 both';
          }
          if(volume_value[1] == 0){
            audio[1].play();
          }
          setTimeout(() => {
            lvl_cont[0].style.display = 'none';
            lvl_cont[1].style.display = 'block';
          }, 2400);
        }, 600);
      }
    }
    
    lvl_box[0].addEventListener('click', () => {
      rotate(0,0,0);
      complete_lvl_1();
    });
    
    rotate_value[1] = 0;
    lvl_box[1].addEventListener('click', () => {
      rotate(0,1,1);
      complete_lvl_1();
    });
    
    rotate_value[2] = 0;
    lvl_box[2].addEventListener('click', () => {
      rotate(0,2,2);
      complete_lvl_1();
    });
    
    rotate_value[3] = 2;
    lvl_box[3].addEventListener('click', () => {
      rotate(0,3,3);
      complete_lvl_1();
    });
    
    // 2nd Level 
    
    let complete_lvl_2 = () => {
      if(v[1][0] === 0 && (v[1][1] === 90 || v[1][1] === 270) && v[1][2] === 90 && v[1][3] === 270 && (v[1][4] === 90 || v[1][4] === 270) && v[1][5] === 180){
        setTimeout(() => {
          for(i=4; i<=7; i++){
            lvl_cmplt_shape[i].style.display = 'block';
            lvl_cmplt_shape[i].style.animation = 'lvl_cmplt_shape 1.6s ease 0s 1 forwards';
            shape[i].style.animation = 'lvl_complete 2.2s ease 0s 1 forwards';
            lvl_cmplt_shape_straight[0].style.animation = 'lvl_cmplt_shape_straight 1.6s ease 0s 1 forwards';
            lvl_cmplt_shape_straight[1].style.animation = 'lvl_cmplt_shape_straight 1.6s ease 0s 1 forwards';
            shape_straight[0].style.animation = 'lvl_complete_straight 2.2s ease 0s 1 forwards';
            shape_straight[1].style.animation = 'lvl_complete_straight 2.2s ease 0s 1 forwards';
            update_goal[1].style.animation = 'old_goal .6s ease 2.2s 1 both';
            update_goal[2].style.display = 'block';
            update_goal[2].style.animation = 'new_goal .6s ease 2.6s 1 both';
          }
          if(volume_value[1] == 0){
            audio[1].play();
          }
          setTimeout(() => {
            lvl_cont[1].style.display = 'none';
            lvl_cont[2].style.display = 'block';
          }, 2400);
        }, 600);
      }
    }
    
    rotate_value[4] = 2;
    lvl_box[4].addEventListener('click', () => {
      rotate(1,4,0);
      complete_lvl_2();
    });
    
    lvl_box[5].addEventListener('click', () => {
      rotate(1,5,1);
      complete_lvl_2();
    });
    
    rotate_value[6] = 1;
    lvl_box[6].addEventListener('click', () => {
      rotate(1,6,2);
      complete_lvl_2();
    });
    
    rotate_value[7] = 3;
    lvl_box[7].addEventListener('click', () => {
      rotate(1,7,3);
      complete_lvl_2();
    });
    
    lvl_box[8].addEventListener('click', () => {
      rotate(1,8,4);
      complete_lvl_2();
    });
    
    lvl_box[9].addEventListener('click', () => {
      rotate(1,9,5);
      complete_lvl_2();
    });
    
    // 3rd Level
    
    let complete_lvl_3 = () => {
      if(v[2][0] === 180 && v[2][1] === 180 && v[2][2] === 180 && v[2][3] === 180 && v[2][4] === 180 && v[2][5] === 180){
        setTimeout(() => {
          for(i=8; i<=13;i++){
            lvl_cmplt_shape[i].style.display = 'block';
            lvl_cmplt_shape[i].style.animation = 'lvl_cmplt_shape 1.6s ease 0s 1 forwards';
            shape[i].style.animation = 'lvl_complete 2.2s ease 0s 1 forwards';
            update_goal[2].style.animation = 'old_goal .6s ease 2.2s 1 both';
            update_goal[3].style.display = 'block';
            update_goal[3].style.animation = 'new_goal .6s ease 2.6s 1 both';
          }
          if(volume_value[1] == 0){
            audio[1].play();
          }
          setTimeout(() => {
            lvl_cont[2].style.display = 'none';
            lvl_cont[3].style.display = 'block';
          }, 2400);
        }, 600);
      }
    }
    
    lvl_box[10].addEventListener('click', () => {
      rotate(2,10,0);
      complete_lvl_3();
    });
    
    rotate_value[11] = 1;
    lvl_box[11].addEventListener('click', () => {
      rotate(2,11,1);
      complete_lvl_3();
    });
    
    rotate_value[12] = 3;
    lvl_box[12].addEventListener('click', () => {
      rotate(2,12,2);
      complete_lvl_3();
    });
    
    rotate_value[13] = 1;
    lvl_box[13].addEventListener('click', () => {
      rotate(2,13,3);
      complete_lvl_3();
    });
    
    rotate_value[14] = 3;
    lvl_box[14].addEventListener('click', () => {
      rotate(2,14,4);
      complete_lvl_3();
    });
    
    rotate_value[15] = 2;
    lvl_box[15].addEventListener('click', () => {
      rotate(2,15,5);
      complete_lvl_3();
    });
    
    // 4th Level
    
    let cross = document.querySelectorAll('.cross');
    
    let complete_lvl_4 = () => {
      if(v[3][0] == 0 && v[3][1] == 90 && v[3][2] == 0 && (v[3][3] == 0 || v[3][3] == 90 || v[3][3] == 180 || v[3][3] == 270) && v[3][4] == 180 && v[3][5] == 270 && v[3][6] == 180){
        setTimeout(() => {
          for(j = 14; j < 20; j++){
            lvl_cmplt_shape[j].style.display = 'block'; 
          }
          cross[0].style.animation = 'lvl_complete 2.2s ease 0s 1 forwards';
          cross[1].style.animation = 'lvl_complete 2.2s ease 0s 1 forwards';
          for(k = 14; k < 20; k++){
            shape[k].style.animation = 'lvl_complete 2.2s ease 0s 1 forwards';
          }
          if(volume_value[1] == 0){
            audio[1].play();
          }
          update_goal[3].style.animation = 'old_goal .6s ease 2.2s 1 both';
          update_goal[4].style.display = 'block';
          update_goal[4].style.animation = 'new_goal .6s ease 2.6s 1 both';
          setTimeout(() => {
            lvl_cont[3].style.display = 'none';
            lvl_cont[4].style.display = 'block';
          }, 2400);
        }, 600);
      }
    }
    
    rotate_value[16] = 3;
    lvl_box[16].addEventListener('click', () => {
      rotate(3,16,0);
      complete_lvl_4();
    });
    
    rotate_value[17] = 1;
    lvl_box[17].addEventListener('click', () => {
      rotate(3,17,1);
      complete_lvl_4();
    });
    
    rotate_value[18] = 1;
    lvl_box[18].addEventListener('click', () => {
      rotate(3,18,2);
      complete_lvl_4();
    });
    
    lvl_box[19].addEventListener('click', () => {
      rotate(3,19,3);
      complete_lvl_4();
    });
    
    rotate_value[20] = 3;
    lvl_box[20].addEventListener('click', () => {
      rotate(3,20,4);
      complete_lvl_4();
    });
    
    rotate_value[21] = 3;
    lvl_box[21].addEventListener('click', () => {
      rotate(3,21,5);
      complete_lvl_4();
    });
   
    rotate_value[22] = 1;
    lvl_box[22].addEventListener('click', () => {
      rotate(3,22,6);
      complete_lvl_4();
    });
    
    // 5th Level
    
    let right_angle = document.querySelectorAll('.right_angle');
    
    let complete_lvl_5 = () => {
      if(v[4][0] === 0 && v[4][1] === 90 && v[4][2] === 0 && v[4][3] === 90 && v[4][4] === 0 && v[4][5] === 180 && v[4][6] === 270 && v[4][7] === 180 && v[4][8] === 270 && v[4][9] === 90 && v[4][10] === 270 && v[4][11] === 90 && v[4][12] === 0 && v[4][13] === 90 && v[4][14] === 0 && v[4][15] === 180 && v[4][16] === 270 && v[4][17] === 180 &&  v[4][18] === 270 && v[4][19] === 180){
        let j = 0;
        setTimeout(() => {
          for(j = 20; j < 40; j++){
            lvl_cmplt_shape[j].style.display = 'block'; 
          }
          for(k = 0; k < 20; k++){
            right_angle[k].style.animation = 'lvl_complete 2.2s ease 0s 1 forwards';
          }
          if(volume_value[1] == 0){
            audio[1].play();
          }
          update_goal[4].style.animation = 'old_goal .6s ease 2.2s 1 both';
          update_goal[5].style.display = 'block';
          update_goal[5].style.animation = 'new_goal .6s ease 2.6s 1 both';
          setTimeout(() => {
            lvl_cont[4].style.display = 'none';
            lvl_cont[5].style.display = 'block';
          }, 2400);
        }, 600);
      }
    }
    
    rotate_value[23] = 2;
    lvl_box[23].addEventListener('click', () => {
      rotate(4,23,0);
      complete_lvl_5();
    });
    
    rotate_value[24] = 2;
    lvl_box[24].addEventListener('click', () => {
      rotate(4,24,1);
      complete_lvl_5();
    });
    
    rotate_value[25] = 3;
    lvl_box[25].addEventListener('click', () => {
      rotate(4,25,2);
      complete_lvl_5();
    });
    
    rotate_value[26] = 3;
    lvl_box[26].addEventListener('click', () => {
      rotate(4,26,3);
      complete_lvl_5();
    });
    
    rotate_value[27] = 2;
    lvl_box[27].addEventListener('click', () => {
      rotate(4,27,4);
      complete_lvl_5();
    });
    
    rotate_value[28] = 2;
    lvl_box[28].addEventListener('click', () => {
      rotate(4,28,5);
      complete_lvl_5();
    });
    
    rotate_value[29] = 1;
    lvl_box[29].addEventListener('click', () => {
      rotate(4,29,6);
      complete_lvl_5();
    });
    
    rotate_value[30] = 2;
    lvl_box[30].addEventListener('click', () => {
      rotate(4,30,7);
      complete_lvl_5();
    });
    
    rotate_value[31] = 3;
    lvl_box[31].addEventListener('click', () => {
      rotate(4,31,8);
      complete_lvl_5();
    });
    
    rotate_value[32] = 3;
    lvl_box[32].addEventListener('click', () => {
      rotate(4,32,9);
      complete_lvl_5();
    });
    
    rotate_value[33] = 1;
    lvl_box[33].addEventListener('click', () => {
      rotate(4,33,10);
      complete_lvl_5();
    });
    
    rotate_value[34] = 1;
    lvl_box[34].addEventListener('click', () => {
      rotate(4,34,11);
      complete_lvl_5();
    });
    
    lvl_box[35].addEventListener('click', () => {
      rotate(4,35,12);
      complete_lvl_5();
    });
    
    rotate_value[36] = 3;
    lvl_box[36].addEventListener('click', () => {
      rotate(4,36,13);
      complete_lvl_5();
    });
    
    lvl_box[37].addEventListener('click', () => {
      rotate(4,37,14);
      complete_lvl_5();
    });
    
    lvl_box[38].addEventListener('click', () => {
      rotate(4,38,15);
      complete_lvl_5();
    });
    
    rotate_value[39] = 1;
    lvl_box[39].addEventListener('click', () => {
      rotate(4,39,16);
      complete_lvl_5();
    });
    
    rotate_value[40] = 1;
    lvl_box[40].addEventListener('click', () => {
      rotate(4,40,17);
      complete_lvl_5();
    });
    
    lvl_box[41].addEventListener('click', () => {
      rotate(4,41,18);
      complete_lvl_5();
    });
    
    lvl_box[42].addEventListener('click', () => {
      rotate(4,42,19);
      complete_lvl_5();
    });
    
    // 6th Level 
    
    let lvl_cmplt = document.querySelectorAll('.lvl_cmplt');
    let sml_straight = document.querySelectorAll('.sml_straight');
    
    let complete_lvl_6 = () => {
      if(v[5][0] == 0 && v[5][1] == 90 && v[5][2] == 0 && v[5][3] == 90 && v[5][4] == 270 && v[5][5] == 180 && v[5][6] == 0 && v[5][7] == 270 && v[5][8] == 180 && v[5][9] == 270 && (v[5][10] == 0 || v[5][10] == 90 || v[5][10] == 180 || v[5][10] == 270) && v[5][11] == 90 && v[5][12] == 0 && v[5][13] == 90 && v[5][14] == 180 && v[5][15] == 0 && v[5][16] == 90 && v[5][17] == 270 && v[5][18] == 180 && v[5][19] == 270 && v[5][20] == 180){
        setTimeout(() => {
          for(j = 41; j < 56; j++){
            lvl_cmplt_shape[j].style.display = 'block'; 
          }
          for(k = 0; k < 4; k++){
            lvl_cmplt[k].style.display = 'block';
            lvl_cmplt[k].style.animation = 'lvl_cmplt_sml_straight 1.6s ease .4s 1 forwards';
            sml_straight[k].style.animation = 'lvl_complete_straight 2.2s ease 0s 1 forwards';
          }
          cross[2].style.animation = 'lvl_complete 2.2s ease 0s 1 forwards';
          cross[3].style.animation = 'lvl_complete 2.2s ease 0s 1 forwards';
          for(l = 20; l < 36; l++){
            right_angle[l].style.animation = 'lvl_complete 2.2s ease 0s 1 forwards';
          }
          if(volume_value[1] == 0){
            audio[1].play();
          }
          update_goal[5].style.animation = 'old_goal .6s ease 2.2s 1 both';
          update_goal[6].style.display = 'block';
          update_goal[6].style.animation = 'new_goal .6s ease 2.6s 1 both';
          setTimeout(() => {
            lvl_cont[5].style.display = 'none';
            lvl_cont[6].style.display = 'block';
          }, 2400);
        }, 600);
      }
    }
    
    lvl_box[43].addEventListener('click', () => {
      rotate(5,43,0);
      complete_lvl_6();
    });
    
    rotate_value[44] = 1;
    lvl_box[44].addEventListener('click', () => {
      rotate(5,44,1);
      complete_lvl_6();
    });
    
    lvl_box[45].addEventListener('click', () => {
      rotate(5,45,2);
      complete_lvl_6();
    });
    
    rotate_value[46] = 1;
    lvl_box[46].addEventListener('click', () => {
      rotate(5,46,3);
      complete_lvl_6();
    });
    
    rotate_value[47] = 3;
    lvl_box[47].addEventListener('click', () => {
      rotate(5,47,4);
      complete_lvl_6();
    });
    
    rotate_value[48] = 2;
    lvl_box[48].addEventListener('click', () => {
      rotate(5,48,5);
      complete_lvl_6();
    });
    
    lvl_box[49].addEventListener('click', () => {
      rotate(5,49,6);
      complete_lvl_6();
    });
    
    rotate_value[50] = 3;
    lvl_box[50].addEventListener('click', () => {
      rotate(5,50,7);
      complete_lvl_6();
    });
    
    rotate_value[51] = 2;
    lvl_box[51].addEventListener('click', () => {
      rotate(5,51,8);
      complete_lvl_6();
    });
    
    lvl_box[52].addEventListener('click', () => {
      rotate(5,52,9);
      complete_lvl_6();
    });
    
    lvl_box[53].addEventListener('click', () => {
      rotate(5,53,10);
      complete_lvl_6();
    });
    
    lvl_box[54].addEventListener('click', () => {
      rotate(5,54,11);
      complete_lvl_6();
    });
    
    rotate_value[55] = 1;
    lvl_box[55].addEventListener('click', () => {
      rotate(5,55,12);
      complete_lvl_6();
    });
    
    rotate_value[56] = 3;
    lvl_box[56].addEventListener('click', () => {
      rotate(5,56,13);
      complete_lvl_6();
    });
    
    lvl_box[57].addEventListener('click', () => {
      rotate(5,57,14);
      complete_lvl_6();
    });
    
    rotate_value[58] = 2;
    lvl_box[58].addEventListener('click', () => {
      rotate(5,58,15);
      complete_lvl_6();
    });
    
    lvl_box[59].addEventListener('click', () => {
      rotate(5,59,16);
      complete_lvl_6();
    });
    
    rotate_value[60] = 1;
    lvl_box[60].addEventListener('click', () => {
      rotate(5,60,17);
      complete_lvl_6();
    });
    
    rotate_value[61] = 1;
    lvl_box[61].addEventListener('click', () => {
      rotate(5,61,18);
      complete_lvl_6();
    });
    
    lvl_box[62].addEventListener('click', () => {
      rotate(5,62,19);
      complete_lvl_6();
    });
    
    lvl_box[63].addEventListener('click', () => {
      rotate(5,63,20);
      complete_lvl_6();
    });
    
    // 7th Level
    
    let big_straight = document.querySelectorAll('.big_straight');
    
    let complete_lvl_7 = () => {
      if(v[6][0] == 0 && (v[6][1] == 90 || v[6][1] == 270) && (v[6][2] == 90 || v[6][2] == 270) && v[6][3] == 90 && (v[6][4] == 0 || v[6][4] == 180) && v[6][5] == 0 && v[6][6] == 90 && v[6][7] == 180 && v[6][8] == 0 && v[6][9] == 270 && v[6][10] == 180 && (v[6][11] == 0 || v[6][11] == 180) && v[6][12] == 270 && (v[6][13] == 90 || v[6][13] == 270) && (v[6][14] == 90 || v[6][14] == 270) && v[6][15] == 180){
        setTimeout(() => {
          for(j = 56; j < 64; j++){
            lvl_cmplt_shape[j].style.display = 'block'; 
          }
          for(k = 4; k < 10; k++) {
            lvl_cmplt[k].style.display = 'block';
          }
          for(l=0; l<6; l++){
            big_straight[l].style.animation = 'lvl_complete_straight 2.2s ease 0s 1 forwards';
          }
          if(volume_value[1] == 0){
            audio[1].play();
          }
          lvl_cont[6].style.animation = 'old_level 2.2s ease 0s 1 both';
          update_goal[6].style.animation = 'old_goal .6s ease 2.2s 1 both';
          update_goal[7].style.display = 'block';
          update_goal[7].style.animation = 'new_goal .6s ease 2.6s 1 both';
          setTimeout(() => {
            lvl_cont[6].style.display = 'none';
            lvl_cont[7].style.display = 'block';
          }, 2400);
        }, 600);
      }
    }
    
    rotate_value[64] = 2;
    lvl_box[64].addEventListener('click', () => {
      rotate(6,64,0);
      complete_lvl_7();
    });
    
    rotate_value[65] = 1;
    lvl_box[65].addEventListener('click', () => {
      rotate(6,65,1);
      complete_lvl_7();
    });
    
    lvl_box[66].addEventListener('click', () => {
      rotate(6,66,2);
      complete_lvl_7();
    });
    
    rotate_value[67] = 1;
    lvl_box[67].addEventListener('click', () => {
      rotate(6,67,3);
      complete_lvl_7();
    });
    
    lvl_box[68].addEventListener('click', () => {
      rotate(6,68,4);
      complete_lvl_7();
    });
    
    lvl_box[69].addEventListener('click', () => {
      rotate(6,69,5);
      complete_lvl_7();
    });
    
    lvl_box[70].addEventListener('click', () => {
      rotate(6,70,6);
      complete_lvl_7();
    });
    
    rotate_value[71] = 3;
    lvl_box[71].addEventListener('click', () => {
      rotate(6,71,7);
      complete_lvl_7();
    });
    
    rotate_value[72] = 1;
    lvl_box[72].addEventListener('click', () => {
      rotate(6,72,8);
      complete_lvl_7();
    });
    
    rotate_value[73] = 2;
    lvl_box[73].addEventListener('click', () => {
      rotate(6,73,9);
      complete_lvl_7();
    });
    
    rotate_value[74] = 2;
    lvl_box[74].addEventListener('click', () => {
      rotate(6,74,10);
      complete_lvl_7();
    });
    
    lvl_box[75].addEventListener('click', () => {
      rotate(6,75,11);
      complete_lvl_7();
    });
    
    rotate_value[76] = 3;
    lvl_box[76].addEventListener('click', () => {
      rotate(6,76,12);
      complete_lvl_7();
    });
    
    lvl_box[77].addEventListener('click', () => {
      rotate(6,77,13);
      complete_lvl_7();
    });
    
    rotate_value[78] = 1;
    lvl_box[78].addEventListener('click', () => {
      rotate(6,78,14);
      complete_lvl_7();
    });
    
    lvl_box[79].addEventListener('click', () => {
      rotate(6,79,15);
      complete_lvl_7();
    });
    
    // 8th Level
    
    let tfp = document.querySelector('.tfp');
    let bottom_container = document.querySelector('.bottom_container');
    let floating_shape = document.querySelectorAll('.floating_shape');
    
    let complete_lvl_8 = () => {
      if((v[7][0] == 0) && (v[7][1] == 90 || v[7][1] == 270) && v[7][2] == 90 && v[7][3] == 0 && (v[7][4] == 90 || v[7][4] == 270) && v[7][5] == 90 && (v[7][6] == 0 || v[7][6] == 180) && v[7][7] == 270 && v[7][8] == 180 && (v[7][9] == 0 || v[7][9] == 180) && v[7][10] == 270 && v[7][11] == 90 && v[7][12] == 0 &&  v[7][13] == 180 &&  v[7][14] == 270 &&  v[7][15] == 90 && v[7][16] == 0 &&  v[7][17] == 180 && v[7][18] == 270 && v[7][19] == 180){
        for(i = 41; i < 58; i++){
          right_angle[i].style.animation = 'red_border 1s ease 2.8s 1 forwards';
        }
        for(j = 6; j < 10; j++){
          big_straight[j].style.animation = 'red_border 1s ease 2.8s 1 forwards';
        }
          if(volume_value[1] == 0){
            audio[1].play();
          }
        lvl_cont[7].style.animation = 'red_box 1s ease 2.8s forwards';
        update_goal[7].style.animation = 'old_goal .6s ease .8s 1 both';
        goal_cont.style.animation = 'btn_anim_gone .6s ease 1.8s 1 both';
        tfp.style.display = 'block';
        setTimeout(() => {
          container.style.display = 'block';
          container.style.animation = 'none';
          container.style.background = 'transparent';
          bottom_container.style.display = 'none';
          for(i = 0; i < floating_shape.length; i++){
            floating_shape[i].style.borderColor = '#ec2a28';
          }
        floating_shape[2].style.display = 'none';
        floating_shape[13].style.display = 'none';
        }, 3800);
      }
    }
    
    rotate_value[80] = 2;
    lvl_box[80].addEventListener('click', () => {
      rotate(7,80,0);
      complete_lvl_8();
    });
    
    lvl_box[81].addEventListener('click', () => {
      rotate(7,81,1);
      complete_lvl_8();
    });
    
    rotate_value[82] = 1;
    lvl_box[82].addEventListener('click', () => {
      rotate(7,82,2);
      complete_lvl_8();
    });
    
    lvl_box[83].addEventListener('click', () => {
      rotate(7,83,3);
      complete_lvl_8();
    });
    
    lvl_box[84].addEventListener('click', () => {
      rotate(7,84,4);
      complete_lvl_8();
    });
    
    rotate_value[85] = 3;
    lvl_box[85].addEventListener('click', () => {
      rotate(7,85,5);
      complete_lvl_8();
    });
    
    rotate_value[86] = 1;
    lvl_box[86].addEventListener('click', () => {
      rotate(7,86,6);
      complete_lvl_8();
    });
    
    rotate_value[87] = 1;
    lvl_box[87].addEventListener('click', () => {
      rotate(7,87,7);
      complete_lvl_8();
    });
    
    lvl_box[88].addEventListener('click', () => {
      rotate(7,88,8);
      complete_lvl_8();
    });
    
    rotate_value[89] = 1;
    lvl_box[89].addEventListener('click', () => {
      rotate(7,89,9);
      complete_lvl_8();
    });
    
    rotate_value[90] = 3;
    lvl_box[90].addEventListener('click', () => {
      rotate(7,90,10);
      complete_lvl_8();
    });
    
    rotate_value[91] = 3;
    lvl_box[91].addEventListener('click', () => {
      rotate(7,91,11);
      complete_lvl_8();
    });
    
    rotate_value[92] = 2;
    lvl_box[92].addEventListener('click', () => {
      rotate(7,92,12);
      complete_lvl_8();
    });
    
    rotate_value[93] = 2;
    lvl_box[93].addEventListener('click', () => {
      rotate(7,93,13);
      complete_lvl_8();
    });
    
    rotate_value[94] = 1;
    lvl_box[94].addEventListener('click', () => {
      rotate(7,94,14);
      complete_lvl_8();
    });
    
    rotate_value[95] = 1;
    lvl_box[95].addEventListener('click', () => {
      rotate(7,95,15);
      complete_lvl_8();
    });
    
    lvl_box[96].addEventListener('click', () => {
      rotate(7,96,16);
      complete_lvl_8();
    });
    
    lvl_box[97].addEventListener('click', () => {
      rotate(7,97,17);
      complete_lvl_8();
    });
    
    rotate_value[98] = 1;
    lvl_box[98].addEventListener('click', () => {
      rotate(7,98,18);
      complete_lvl_8();
    });
    
    lvl_box[99].addEventListener('click', () => {
      rotate(7,99,19);
      complete_lvl_8();
    });
    
  }
  
  