__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),s=r(d[1]),o=r(d[2]),n=r(d[3]),p=r(d[4]),c=r(d[5]),l=r(d[6]),h=r(d[7]),u=r(d[8]),y=r(d[9]),b=r(d[10]),f=r(d[11]),P={top:20,left:20,right:20,bottom:30},v=y({displayName:'TouchableOpacity',mixins:[l,h.Mixin,n],propTypes:t({},u.propTypes,{activeOpacity:c.number,hasTVPreferredFocus:c.bool,tvParallaxProperties:c.object}),getDefaultProps:function(){return{activeOpacity:.2}},getInitialState:function(){return t({},this.touchableGetInitialState(),{anim:new s.Value(this._getChildStyleOpacityWithDefault())})},componentDidMount:function(){b(this.props)},UNSAFE_componentWillReceiveProps:function(t){b(t)},componentDidUpdate:function(t,s){this.props.disabled!==t.disabled&&this._opacityInactive(250)},setOpacityTo:function(t,n){s.timing(this.state.anim,{toValue:t,duration:n,easing:o.inOut(o.quad),useNativeDriver:!0}).start()},touchableHandleActivePressIn:function(t){'onResponderGrant'===t.dispatchConfig.registrationName?this._opacityActive(0):this._opacityActive(150),this.props.onPressIn&&this.props.onPressIn(t)},touchableHandleActivePressOut:function(t){this._opacityInactive(250),this.props.onPressOut&&this.props.onPressOut(t)},touchableHandlePress:function(t){this.props.onPress&&this.props.onPress(t)},touchableHandleLongPress:function(t){this.props.onLongPress&&this.props.onLongPress(t)},touchableGetPressRectOffset:function(){return this.props.pressRetentionOffset||P},touchableGetHitSlop:function(){return this.props.hitSlop},touchableGetHighlightDelayMS:function(){return this.props.delayPressIn||0},touchableGetLongPressDelayMS:function(){return 0===this.props.delayLongPress?0:this.props.delayLongPress||500},touchableGetPressOutDelayMS:function(){return this.props.delayPressOut},_opacityActive:function(t){this.setOpacityTo(this.props.activeOpacity,t)},_opacityInactive:function(t){this.setOpacityTo(this._getChildStyleOpacityWithDefault(),t)},_getChildStyleOpacityWithDefault:function(){var t=f(this.props.style)||{};return void 0==t.opacity?1:t.opacity},render:function(){return p.createElement(s.View,{accessible:!1!==this.props.accessible,accessibilityLabel:this.props.accessibilityLabel,accessibilityHint:this.props.accessibilityHint,accessibilityRole:this.props.accessibilityRole,accessibilityStates:this.props.accessibilityStates,style:[this.props.style,{opacity:this.state.anim}],nativeID:this.props.nativeID,testID:this.props.testID,onLayout:this.props.onLayout,isTVSelectable:!0,hasTVPreferredFocus:this.props.hasTVPreferredFocus,tvParallaxProperties:this.props.tvParallaxProperties,hitSlop:this.props.hitSlop,onStartShouldSetResponder:this.touchableHandleStartShouldSetResponder,onResponderTerminationRequest:this.touchableHandleResponderTerminationRequest,onResponderGrant:this.touchableHandleResponderGrant,onResponderMove:this.touchableHandleResponderMove,onResponderRelease:this.touchableHandleResponderRelease,onResponderTerminate:this.touchableHandleResponderTerminate},this.props.children,h.renderDebugView({color:'cyan',hitSlop:this.props.hitSlop}))}});m.exports=v},201,[59,202,228,261,61,73,195,186,194,196,199,88]);