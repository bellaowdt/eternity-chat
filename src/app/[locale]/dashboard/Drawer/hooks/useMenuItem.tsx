import { MultipleStop, PendingActions } from "@mui/icons-material";
import {
  DirectboxReceive,
  Document,
  SecurityUser,
  User,
  UserEdit,
  UserOctagon,
  UserTick,
  MessageAdd1,
} from "iconsax-react";
import { useTranslation } from "react-i18next";
import { useSelector } from "@/store";
import { NavItemType } from "@/types/menu";
import DashboardIcon from "@mui/icons-material/Dashboard";

const useMenuItem = (): NavItemType => {
  const { t } = useTranslation();
  const privileges = useSelector((state) => state.privileges.value);

  const children: NavItemType["children"] = [];

  children.push({
    id: "admin-dashboard-menu",
    type: "item",
    title: t("pages:menu.dashboard"),
    icon: <DashboardIcon />,
    url: "/",
    breadcrumbs: false,
  });

  if (privileges?.Request?.RequestList) {
    children.push({
      id: "new-requests-menu",
      type: "item",
      title: t("pages:menu.addNewRequest"),
      icon: <MessageAdd1 />,
      url: "/requests/create",
    });

    children.push({
      id: "requests-menu",
      type: "item",
      title: t("pages:menu.myRequests"),
      icon: <Document />,
      url: "/requests",
    });

    children.push({
      id: "batch-requests-menu",
      type: "item",
      title: t("pages:menu.myBatchRequests"),
      icon: <DirectboxReceive />,
      url: "/batch-requests",
    });
  }

  if (privileges?.["Request Admin"]?.RequestAdminList) {
    children.push({
      id: "admin-requests-menu",
      type: "item",
      title: t("pages:menu.adminRequests"),
      icon: <DirectboxReceive />,
      url: "/admin/requests",
    });
  }

  const userManagementPrivileges = [
    privileges?.["User Admin"]?.UserAdminAdminList,
    privileges?.["User Admin"]?.SupplierAdminUserList,
    privileges?.["User Admin"]?.CustomerAdminUserList,
    privileges?.["User Admin"]?.UserAdminAutoLogin,
  ];

  if (userManagementPrivileges.some((item) => item)) {
    const parentMenu: NavItemType["children"][number] = {
      id: "users-menu",
      title: t("pages:menu.userManagement"),
      type: "collapse",
      icon: <UserEdit />,
      children: [],
    };

    if (privileges?.["User Admin"]?.UserAdminAdminList) {
      parentMenu.children.push({
        id: "admin-users",
        title: t("pages:menu.administrators"),
        type: "item",
        url: "/users/admin",
        icon: <SecurityUser />,
      });
    }

    if (privileges?.["User Admin"]?.SupplierAdminUserList) {
      parentMenu.children.push({
        id: "suppliers-menu",
        type: "item",
        title: t("pages:menu.adminSuppliers"),
        icon: <UserOctagon />,
        url: "/admin/suppliers",
      });

      parentMenu.children.push({
        id: "logistics-menu",
        type: "item",
        title: t("pages:menu.adminLogistics"),
        icon: <UserOctagon />,
        url: "/admin/logistics",
      });
    }

    if (privileges?.["User Admin"]?.CustomerAdminUserList) {
      parentMenu.children.push({
        id: "customers-menu",
        type: "item",
        title: t("pages:menu.adminCustomers"),
        icon: <User />,
        url: "/admin/customers",
      });
    }

    children.push(parentMenu);
  }

  if (privileges?.["User Admin"]?.UserAdminRoleList) {
    children.push({
      id: "roles-menu",
      type: "item",
      title: t("pages:menu.roles"),
      icon: <UserTick />,
      url: "/roles",
    });
  }

  if (privileges?.["Request Admin"]?.RequestAdminList) {
    children.push({
      //this is for admin privilege
      id: "Admin-Order",
      type: "item",
      title: t("pages:menu.orders"),
      icon: <PendingActions />,
      url: "/admin/orders",
    });
  } else {
    children.push({
      //this is for user privilege
      id: "User-Order",
      type: "item",
      title: t("pages:menu.orders"),
      icon: <PendingActions />,
      url: "/user/orders",
    });

    children.push({
      id: "bulk-order-request",
      type: "item",
      title: t("pages:menu.createBatchRequest"),
      icon: <MultipleStop />,
      url: "/customer/create-batch-request",
    });
  }

  // TODO: change the privilege name
  if (privileges?.["Request Admin"]?.RequestAdminList) {
    children.push({
      id: "admin-batch-requests-menu",
      type: "item",
      title: t("pages:menu.adminBatchRequests"),
      icon: <DirectboxReceive />,
      url: "/admin/batch-requests",
    });
  }

  children.push({
    id: "change-password-menu",
    type: "collapse",
    title: t("pages:menu.myAccount"),
    icon: <UserEdit />,
    children: [
      {
        id: "change-password-vv",
        type: "item",
        title: t("common:buttons.changePassword"),
        icon: <SecurityUser />,
        url: "/account/change-password",
      },
    ],
  });

  return {
    id: "group-server-menu",
    type: "group",
    children,
  };
};

export default useMenuItem;
