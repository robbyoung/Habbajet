"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FrameCounts = /** @class */ (function () {
    function FrameCounts() {
        this.tFrames = [
            0,
            19,
            14,
            10,
            12,
            0,
            0,
        ];
        this.iFrames = [
            10,
            9,
            6,
            6,
            7,
            1,
            1,
        ];
        this.aFrames = [
            14,
            13,
            7,
            6,
            9,
            0,
            0,
        ];
        this.bFrames = [
            18,
            11,
            6,
            9,
            7,
            0,
            0,
        ];
    }
    FrameCounts.prototype.exists = function (state, frame, action) {
        if (frame < 0)
            return false;
        switch (action) {
            case ('t'): return this.tFrames[state] > frame;
            case ('i'): return this.iFrames[state] > frame;
            case ('a'): return this.aFrames[state] > frame;
            case ('b'): return this.bFrames[state] > frame;
            default: return false;
        }
    };
    return FrameCounts;
}());
exports.FrameCounts = FrameCounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWUtY291bnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnJhbWUtY291bnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFPSTtRQUVJLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxDQUFDO1lBQ0QsRUFBRTtZQUNGLEVBQUU7WUFDRixFQUFFO1lBQ0YsRUFBRTtZQUNGLENBQUM7WUFDRCxDQUFDO1NBQ0osQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxFQUFFO1lBQ0YsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1NBQ0osQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxFQUFFO1lBQ0YsRUFBRTtZQUNGLENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1NBQ0osQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxFQUFFO1lBQ0YsRUFBRTtZQUNGLENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sS0FBYSxFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQy9DLEVBQUUsQ0FBQSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzNCLE1BQU0sQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWixLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDOUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM5QyxLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzlDLFNBQVMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQixDQUFDO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQTVERCxJQTREQztBQTVEWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGcmFtZUNvdW50cyB7XHJcblxyXG4gICAgcHVibGljIGlGcmFtZXM6IG51bWJlcltdO1xyXG4gICAgcHVibGljIHRGcmFtZXM6IG51bWJlcltdO1xyXG4gICAgcHVibGljIGFGcmFtZXM6IG51bWJlcltdO1xyXG4gICAgcHVibGljIGJGcmFtZXM6IG51bWJlcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLnRGcmFtZXMgPSBbXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDE5LFxyXG4gICAgICAgICAgICAxNCxcclxuICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgIDEyLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHRoaXMuaUZyYW1lcyA9IFtcclxuICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgIDksXHJcbiAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgIDcsXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy5hRnJhbWVzID0gW1xyXG4gICAgICAgICAgICAxNCxcclxuICAgICAgICAgICAgMTMsXHJcbiAgICAgICAgICAgIDcsXHJcbiAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgIDksXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy5iRnJhbWVzID0gW1xyXG4gICAgICAgICAgICAxOCxcclxuICAgICAgICAgICAgMTEsXHJcbiAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgIDksXHJcbiAgICAgICAgICAgIDcsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBleGlzdHMoc3RhdGU6IG51bWJlciwgZnJhbWU6IG51bWJlciwgYWN0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZihmcmFtZSA8IDApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBzd2l0Y2goYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UoJ3QnKTogcmV0dXJuIHRoaXMudEZyYW1lc1tzdGF0ZV0gPiBmcmFtZTtcclxuICAgICAgICAgICAgY2FzZSgnaScpOiByZXR1cm4gdGhpcy5pRnJhbWVzW3N0YXRlXSA+IGZyYW1lO1xyXG4gICAgICAgICAgICBjYXNlKCdhJyk6IHJldHVybiB0aGlzLmFGcmFtZXNbc3RhdGVdID4gZnJhbWU7XHJcbiAgICAgICAgICAgIGNhc2UoJ2InKTogcmV0dXJuIHRoaXMuYkZyYW1lc1tzdGF0ZV0gPiBmcmFtZTtcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==