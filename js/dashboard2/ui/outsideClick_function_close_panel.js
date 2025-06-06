// file name: outsideClick_function_close_panel.js

const DEBUG = false;

import {
    clearAddDeviceForm,
    clearAddMemberForm
} from "./fill_function_to_all_panel.js";

document.addEventListener("click", (e) => {
    const sidebarsWithButtons = [{
            sidebar: window._2_profile_show_sidebar,
            button: window._2_profile_show_sidebar_show_btn
        },
        {
            sidebar: window._3_Select_room_main_sidebar,
            button: window._3_Select_room_main_sidebar_show_btn
        },
        {
            sidebar: window._4_setting_menu_sidebar,
            button: window._4_setting_menu_sidebar_show_btn
        },
        {
            sidebar: window._5_add_member_sm_sidebar,
            button: window._5_add_member_sm_sidebar_show_btn
        },
        {
            sidebar: window._6_list_member_sm_sidebar,
            button: window._6_list_member_sm_sidebar_show_btn
        },
        {
            sidebar: window._7_add_device_sm_sidebar,
            button: window._7_add_device_sm_sidebar_show_btn
        },
        {
            sidebar: window._8_select_room_sm_sidebar,
            button: window._8_select_room_update_device_sm_sidebar_show_btn
        },
        {
            sidebar: window._9_update_device_sm_sidebar,
            button: window._9_update_device_sm_sidebar_show_btn
        }
    ];

    sidebarsWithButtons.forEach(({
        sidebar,
        button
    }) => {
        if (
            sidebar &&
            sidebar.classList.contains("show") &&
            !sidebar.contains(e.target) &&
            !(button && button.contains(e.target))
        ) {
            sidebar.classList.remove("show");
            if (DEBUG) console.log(`🔐 Sidebar closed by outside click: ${sidebar.id}`);

            // ✅ Clear forms for specific sidebars
            if (sidebar.id === "sidebar7") {
                clearAddDeviceForm();
            } else if (sidebar.id === "sidebar5") {
                clearAddMemberForm();
            }
        }
    });
});