(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{222:function(s,t,a){"use strict";a.r(t);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("blockquote",[a("p",[s._v("对于搜索遇到的索引记录，锁定行和任何关联的索引条目，就像您UPDATE为这些行发出 语句一样。阻止其他事务更新这些行，执行SELECT ... LOCK IN SHARE MODE或从某些事务隔离级别读取数据。一致性读取将忽略在读取视图中存在的记录上设置的任何锁定。"),a("br"),s._v("\n对于锁定读取 （SELECT使用FOR UPDATE或LOCK IN SHARE MODE）， UPDATE和 DELETE语句，所采用的锁取决于语句是使用具有唯一搜索条件的唯一索引还是范围类型搜索条件。"),a("br"),s._v("\n对于具有唯一搜索条件的唯一索引， InnoDB仅锁定找到的索引记录，而不是之前的间隙。"),a("br"),s._v("\n对于其他搜索条件以及非唯一索引， InnoDB锁定扫描的索引范围，使用间隙锁或 下一键锁定 来阻止其他会话插入范围所涵盖的间隙。有关间隙锁和下一键锁的信息，请参见第14.6.1节“InnoDB锁定”。")])]),s._v(" "),a("p",[s._v("根据mysql官方文档我们可以知道SELECT ... FOR UPDATE可以给查询到的关联记录加上读锁的，能够阻止其他的事务更新这些行。\n"),s._v("\n在实际的项目中，订单的流水号的规则如下CGD + 20181011 + 00001 程序调用的function如下：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("--- genatorBillNo")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("DEFINER")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("root"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{attrs:{class:"token variable"}},[s._v("@`%`")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("FUNCTION")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("genatorBillNo"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bill_type "),a("span",{attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("10")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("bill_date "),a("span",{attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("40")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("id_own_org "),a("span",{attrs:{class:"token keyword"}},[s._v("BIGINT")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("UNSIGNED")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("RETURNS")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("255")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("CHARSET")]),s._v(" utf8\n"),a("span",{attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("DECLARE")]),s._v(" newBillNo "),a("span",{attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("20")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("''")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t"),a("span",{attrs:{class:"token comment"}},[s._v("#生成最新单据号")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("DECLARE")]),s._v(" seq "),a("span",{attrs:{class:"token keyword"}},[s._v("BIGINT")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t\t\t\t\t\t\t"),a("span",{attrs:{class:"token comment"}},[s._v("#当前单据序列")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("DECLARE")]),s._v(" seqStr "),a("span",{attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("10")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("''")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t"),a("span",{attrs:{class:"token comment"}},[s._v("#序列补0")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" next_sn "),a("span",{attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" seq "),a("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tm_billno_sn  s "),a("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("\n\ts"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("business_type "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" bill_type  "),a("span",{attrs:{class:"token operator"}},[s._v("AND")]),s._v(" DATE_FORMAT"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sn_date"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'%Y-%m-%d'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" bill_date "),a("span",{attrs:{class:"token operator"}},[s._v("AND")]),s._v(" s"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id_own_org "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" id_own_org "),a("span",{attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("UPDATE")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" seq "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("THEN")]),s._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" tm_billno_sn"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pk_id"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("business_type"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("next_sn"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("id_own_org"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("sn_date"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("UUID_SHORT"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("bill_type"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("002")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("id_own_org"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" DATE_FORMAT"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" bill_date"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'%Y-%m-%d'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" seq "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("001")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" tm_billno_sn n "),a("span",{attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" next_sn "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" n"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next_sn"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("\n\t\t\tn"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("business_type "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" bill_type "),a("span",{attrs:{class:"token operator"}},[s._v("AND")]),s._v(" DATE_FORMAT"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sn_date"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'%Y-%m-%d'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" bill_date "),a("span",{attrs:{class:"token operator"}},[s._v("AND")]),s._v(" n"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id_own_org "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" id_own_org "),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("END")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("IF")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" seqStr "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" LPAD"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("seq"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("3")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'0'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" newBillNo "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" CONCAT"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bill_type"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("DATE_FORMAT"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bill_date"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'%Y%m%d'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("seqStr"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("RETURN")]),s._v(" newBillNo"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("--- tm_billno_sn")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("tm_billno_sn"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("pk_id"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("20")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'主键'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("business_type"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("char")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("10")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'业务类型'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("next_sn"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("20")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'当前流水号'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id_own_org"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("20")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'组织'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("sn_date"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("date")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'归零日期'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("pk_id"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("IDX_SN_DATE"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("sn_date"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("IDX_ID_OWN_ORG"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id_own_org"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("USING")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("BTREE")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("ENGINE")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token keyword"}},[s._v("InnoDB")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("CHARSET")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8 ROW_FORMAT"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("COMPACT"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("我们碰到了这样的问题：当同一个公司（id_own_org）生成流水号所在的事务超长时，本公司生成其他订单流水也会超时，但是我们的初衷是"),a("code",[s._v("锁定该公司当天特定类型的行")]),s._v("，怎么本公司的其他类型的行也锁定了呢？\n根据官方文档的解释"),a("code",[s._v("对于其他搜索条件以及非唯一索引， InnoDB锁定扫描的索引范围")]),s._v("这里我们只用到了"),a("code",[s._v("IDX_ID_OWN_ORG")]),s._v("这个索引，而这个索引是单列的，所以该公司下所有的记录条数都被锁定了。\n下面我们来做下试验。使用mysql命令行分别开启两个session.\nsession1:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("use")]),s._v(" test\nReading "),a("span",{attrs:{class:"token keyword"}},[s._v("table")]),s._v(" information "),a("span",{attrs:{class:"token keyword"}},[s._v("for")]),s._v(" completion "),a("span",{attrs:{class:"token keyword"}},[s._v("of")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("column")]),s._v(" names\nYou can turn "),a("span",{attrs:{class:"token keyword"}},[s._v("off")]),s._v(" this feature "),a("span",{attrs:{class:"token keyword"}},[s._v("to")]),s._v(" get a quicker startup "),a("span",{attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("A\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("Database")]),s._v(" changed\nmysql"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" autocommit"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token keyword"}},[s._v("off")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" affected "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmysql"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),a("span",{attrs:{class:"token keyword"}},[s._v("begin")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" affected "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" next_sn "),a("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tm_billno_sn  s "),a("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("\n    "),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" s"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("business_type "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'SKD'")]),s._v("  "),a("span",{attrs:{class:"token operator"}},[s._v("AND")]),s._v(" DATE_FORMAT"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sn_date"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'%Y-%m-%d'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'2018-11-04'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("AND")]),s._v(" s"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id_own_org "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("10545511425563128134")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("UPDATE")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token comment"}},[s._v("---------+")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" next_sn "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token comment"}},[s._v("---------+")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("       "),a("span",{attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token comment"}},[s._v("---------+")]),s._v("\n"),a("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("0.25")]),s._v(" sec"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("session2:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" tm_billno_sn n "),a("span",{attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" next_sn "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" n"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next_sn"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" n"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("business_type "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'YSF'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("AND")]),s._v(" DATE_FORMAT"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sn_date"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'%Y-%m-%d'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'2018-11-04'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("AND")]),s._v(" n"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id_own_org "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("10545511425563128134")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nERROR "),a("span",{attrs:{class:"token number"}},[s._v("1205")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HY000"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{attrs:{class:"token keyword"}},[s._v("Lock")]),s._v(" wait timeout exceeded"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" try restarting "),a("span",{attrs:{class:"token keyword"}},[s._v("transaction")]),s._v("\n")])])]),a("p",[s._v("由此可以验证同一公司（id_own_org）的不同类型也是被锁定了的，肯定不行的。优化方法也很简单，将索引IDX_ID_OWN_ORG改建为"),a("code",[s._v("id_own_org和business_type")]),s._v("的联合索引，减小锁定的范围；\n或者先通过id_own_org、business_type、sn_date三者获取pk_id其他的操作使用主键索引，这样就可以锁定单行了。\n另外：如果索引创建的不合适，select...for update在执行的时候mysql认为效率低，或者锁定范围过大，则会造成锁表的情况，为了验证这一问题我们将"),a("code",[s._v("tm_billno_sn")]),s._v("的索引"),a("code",[s._v("IDX_ID_OWN_ORG")]),s._v("也删除。表结构如下：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("tm_billno_sn"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("pk_id"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("20")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'主键'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("business_type"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("char")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("10")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'业务类型'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("next_sn"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("20")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'当前流水号'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id_own_org"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("20")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'组织'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("sn_date"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("date")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'归零日期'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("pk_id"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("IDX_SN_DATE"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("sn_date"),a("span",{attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("ENGINE")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token keyword"}},[s._v("InnoDB")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("CHARSET")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8 ROW_FORMAT"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("COMPACT"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("session1:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("begin")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" affected "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" next_sn "),a("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tm_billno_sn  s "),a("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("\n    "),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" s"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("business_type "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'SKD'")]),s._v("  "),a("span",{attrs:{class:"token operator"}},[s._v("AND")]),s._v(" DATE_FORMAT"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sn_date"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'%Y-%m-%d'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'2018-11-04'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("AND")]),s._v(" s"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id_own_org "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("10545511425563128134")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("UPDATE")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token comment"}},[s._v("---------+")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" next_sn "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token comment"}},[s._v("---------+")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("       "),a("span",{attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token comment"}},[s._v("---------+")]),s._v("\n"),a("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("27.57")]),s._v(" sec"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("session2:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" tm_billno_sn n "),a("span",{attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" next_sn "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" n"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next_sn"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" n"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("business_type "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'YSF'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("AND")]),s._v(" DATE_FORMAT"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sn_date"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'%Y-%m-%d'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'2018-11-04'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("AND")]),s._v(" n"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id_own_org "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("10545511425561984440")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nERROR "),a("span",{attrs:{class:"token number"}},[s._v("1205")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HY000"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{attrs:{class:"token keyword"}},[s._v("Lock")]),s._v(" wait timeout exceeded"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" try restarting "),a("span",{attrs:{class:"token keyword"}},[s._v("transaction")]),s._v("\n")])])]),a("p",[s._v("综上我们得出结论，在使用select ... for update 企图锁定行的时候最好能够使用索引锁定唯一的行，否则就会造成锁表，或者锁定的数据范围太大，造成性能很差的结果。")])])}],!1,null,null,null);o.options.__file="mysqlSelectForupdate.md";t.default=o.exports}}]);